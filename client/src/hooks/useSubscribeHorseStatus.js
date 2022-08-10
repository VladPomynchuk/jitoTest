import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsStart,
  toggleIsStart,
  updateHorseStatusData,
  resetData,
} from 'redux/horseStatusSlice';

const socket = io.connect('http://localhost:3002');

const useSubscribeHorseStatus = () => {
  const dispatch = useDispatch();
  const isStart = useSelector(getIsStart);

  useEffect(() => {
    socket.on('ticker', data => {
      dispatch(updateHorseStatusData(data));
    });
  }, [dispatch]);

  useEffect(() => {
    if (isStart) {
      socket.connect();
      socket.emit('start');
    }

    if (!isStart) {
      socket.disconnect();
      dispatch(resetData());
    }
  }, [dispatch, isStart]);

  const handleToggleIsStart = () => {
    dispatch(toggleIsStart());
  };

  return { handleToggleIsStart, isStart };
};

export default useSubscribeHorseStatus;
