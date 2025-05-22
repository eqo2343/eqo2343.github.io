import React, { useRef, useEffect, useState } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [context, setContext] = useState(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        setContext(context);

        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 1;
    }, []);

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        setStartX(e.nativeEvent.offsetX);
        setStartY(e.nativeEvent.offsetY);
      };
    
      const handleMouseMove = (e) => {
        if (!isDrawing) return;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
        setStartX(e.nativeEvent.offsetX);
        setStartY(e.nativeEvent.offsetY);
      };
    
      const handleMouseUp = () => {
        setIsDrawing(false);
      };
    
      const clearCanvas = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      };
    

    return (
        <div className='flex gap-4 flex-col items-center'>
        <h2 className='text-3xl '>Etch-a-Sketch</h2>
        <canvas
        
          ref={canvasRef}
          width={900}
          height={900}
          style={{ border: '1px solid rgb(56, 189, 248)' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <button className='w-25' onClick={clearCanvas}>Clear</button>
      </div>
    )
};

export default Canvas;