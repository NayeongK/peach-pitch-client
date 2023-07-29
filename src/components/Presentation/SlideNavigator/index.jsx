import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import SlideCanvas from "../SlideCanvasLayout/SlideCanvas";
import axiosInstance from "../../../services/axios";

function getUser() {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));

  return loggedInUser;
}
const user = getUser();
const userId = user._id;

function SlideNavigator({ slides }) {
  const { presentationId } = useParams();
  const [selectedSlideId, setSelectedSlideId] = useState(null);
  const [slidesState, setSlidesState] = useState(slides);
  const queryClient = useQueryClient();

  useEffect(() => {
    setSlidesState(slides);
  }, [slides]);

  const useAddSlideMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(
        `/users/${userId}/presentations/${presentationId}/slides`,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("presentations");
    },
  });

  const useDeleteSlideMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete(
        `/users/${userId}/presentations/${presentationId}/slides/${selectedSlideId}`,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("presentations");
    },
  });

  const useUpdateSlideOrderMutation = useMutation({
    mutationFn: async ({ newOrder }) => {
      const response = await axiosInstance.put(
        `/users/${userId}/presentations/${presentationId}/slides`,
        { newOrder },
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("presentations");
    },
  });

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  function handleContextMenu(event, id) {
    setSelectedSlideId(id);
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handleCloseContextMenu() {
    setContextMenu({ visible: false, x: 0, y: 0 });
  }

  function updateSlideOrder(currentSlides, droppedSlideId, targetSlideId) {
    const droppedIndex = currentSlides.findIndex(
      (slide) => slide._id === droppedSlideId,
    );
    const targetIndex = currentSlides.findIndex(
      (slide) => slide._id === targetSlideId,
    );

    const newSlides = [...currentSlides];
    const [removed] = newSlides.splice(droppedIndex, 1);
    newSlides.splice(targetIndex, 0, removed);

    return newSlides;
  }

  async function handleAddSlide() {
    try {
      await useAddSlideMutation.mutateAsync();
      handleCloseContextMenu();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteSlide() {
    try {
      await useDeleteSlideMutation.mutateAsync();
      handleCloseContextMenu();
    } catch (error) {
      console.error(error);
    }
  }

  function handleDragStart(event, id) {
    event.dataTransfer.setData("text/plain", id);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  async function handleDrop(event, id) {
    event.preventDefault();

    const droppedSlideId = event.dataTransfer.getData("text/plain");
    const targetSlideId = id;

    const newSlides = updateSlideOrder(
      slidesState,
      droppedSlideId,
      targetSlideId,
    );

    setSlidesState(newSlides);

    const newOrder = newSlides.map((slide) => slide._id);

    await useUpdateSlideOrderMutation.mutateAsync({ newOrder });
  }

  return (
    <Wrapper>
      {slides.map((slide) => {
        const thumbnailObjects = slide.objects.map(
          ({ type, _id, coordinates, dimensions }) => ({
            type,
            _id,
            x: coordinates.x,
            y: coordinates.y,
            width: dimensions.width,
            height: dimensions.height,
          }),
        );

        return (
          <Link
            key={slide._id}
            to={`/presentations/${presentationId}/${slide._id}`}
            draggable="true"
            onDragStart={(event) => handleDragStart(event, slide._id)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, slide._id)}
            onContextMenu={(event) => handleContextMenu(event, slide._id)}
            onClick={handleCloseContextMenu}
          >
            <Thumbnail>
              <SlideCanvas
                canvasSpec={{
                  width: 250,
                  height: 150,
                  scaleX: 250 / 800,
                  scaleY: 150 / 500,
                  translate: "-100%, -100%",
                }}
                objects={thumbnailObjects}
              />
            </Thumbnail>
          </Link>
        );
      })}
      {contextMenu.visible && (
        <ContextMenu style={{ top: contextMenu.y, left: contextMenu.x }}>
          <MenuItem onClick={handleAddSlide}>추가</MenuItem>
          <MenuItem onClick={handleDeleteSlide}>삭제</MenuItem>
        </ContextMenu>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: #f1efef;
  max-height: 95%;
  overflow-y: auto;
`;
const ContextMenu = styled.div`
  position: absolute;
  z-index: 100;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  padding: 10px;
  border-radius: 5px;
`;
const Thumbnail = styled.div`
  margin: -330px 0;
`;
const MenuItem = styled.div`
  padding: 5px 10px;
  &:hover {
    background-color: #dfdfdf;
    cursor: pointer;
  }
`;

export default SlideNavigator;
