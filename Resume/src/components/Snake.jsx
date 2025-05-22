import React, { useEffect, useRef } from 'react';
import skulpt from 'skulpt';

const Snake = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        skulpt.pre = 'output';
        skulpt.canvas = canvas;

        const outf = (text) => {
            const mypre = document.getElementById('output');
            mypre.innerHTML = mypre.innerHTML + text;
        }

        const builtInRead = (x) => {
            if (skulpt.builtInFiles === undefined || skulpt.builtInFiles['files'][x] === undefined)
                throw new Error("File not found: '" + x + "'");
            return skulpt.builtInFiles['files'][x];
        }

        if (typeof skulpt !== 'undefined') {
            skulpt.configure({
                output: outf,
                read: builtInRead,
                canvas: canvas
            });

            const pythonCode =`

import turtle
import time
import random

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]
MOVE_DISTANCE = 20
UP = 90
LEFT = 180
DOWN = 270
RIGHT = 0
ALIGNMENT = "center"
FONT = ("Courier", 24, "normal")

// define snake
class Snake:

    def __init__(self):
        self.segments = []
        self.create_snake()
        self.head = self.segments[0]

    def create_snake(self):
        for positions in STARTING_POSITIONS:
            self.add_segment(positions)

    def reset(self):
        for seg in self.segments:
            seg.goto(1000,1000)
        self.segments.clear()
        self.create_snake()
        self.head = self.segments[0]

    def add_segment(self, positions):
        new_segment = Turtle("square")
        new_segment.color("white")
        new_segment.penup()
        new_segment.goto(positions)
        self.segments.append(new_segment)

    def move(self):
        for seg_num in range(len(self.segments) - 1, 0, -1):
            new_x = self.segments[seg_num - 1].xcor()
            new_y = self.segments[seg_num - 1].ycor()
            self.segments[seg_num].goto(new_x, new_y)
        self.head.forward(MOVE_DISTANCE)

    def up(self):
        if self.head.heading() != DOWN:
            self.head.setheading(UP)

    def down(self):
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

    def left(self):
        if self.head.heading() != RIGHT:
            self.head.setheading(LEFT)

    def right(self):
        if self.head.heading() != LEFT:
            self.head.setheading(RIGHT)


    def extend(self):
        self.add_segment(self.segments[-1].position())

    // define scoreboard

class Scoreboard(Turtle):

    def __init__(self):
        super().__init__()
        self.score = 0
        self.highscore = 0
        self.color("white")
        self.hideturtle()
        self.penup()
        self.goto(0, 270)
        self.update_scoreboard()


    def update_scoreboard(self):
        self.clear()
        self.write(f"Score: {self.score}, HighScore: {self.highscore}", align=ALIGNMENT, font=FONT)

    def reset(self):
        if self.score > self.highscore:
            self.highscore = self.score
        self.score = 0

    def score_up(self):
            self.score += 1
            self.clear()
            self.update_scoreboard()

// define food

class Food(Turtle):

    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_len=0.5, stretch_wid=0.5)
        self.color("blue")
        self.speed("fastest")
        self.refresh()

    def refresh(self):
        random_x = random.randint(-280, 280)
        random_y = random.randint(-280, 280)
        self.goto(random_x, random_y)


            
    // create screen
screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snek")
screen.tracer(0)
            
//  create snake           
snake = Snake()
scoreboard = Scoreboard()
food = Food()
            
screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")
X_POS_MAX = 280
X_POS_MIN = -280
Y_POS_MAX = 280
Y_POS_MIN = -280
            
            
game_is_on = True
while game_is_on:
    screen.update()
    time.sleep(0.1)
            
    snake.move()
            
    #Detect collision with food
    if snake.head.distance(food) < 15:
        food.refresh()
        snake.extend()
        scoreboard.score_up()
        print(scoreboard.score)
            
                #Detect collision with wall
    if snake.head.xcor() >= X_POS_MAX or snake.head.xcor() <= X_POS_MIN or snake.head.ycor() >= Y_POS_MAX or snake.head.ycor() <= Y_POS_MIN:
        scoreboard.reset()
         snake.reset()
        # game_is_on = False
            
            Detect collision with tail
    for segment in snake.segments[1:]:
        if snake.head.distance(segment) < 10:
        # game_is_on = False
            scoreboard.reset()
            
            
            
            
            
            
            
            
            
screen.exitonclick()
turtle.done()
`;

            const runner = () => {
                const prog = skulpt.misceval.asyncToPromise(function () {
                    return skulpt.importMain("<stdin>", false, true);
                });
                prog.then(function (mod) {
                    console.log('success');
                },
                function(err) {
                    console.log(err)
                });
            }

            runner();



        }


    }, []);

    return (
        <div>
            <pre id="output"></pre>
            <canvas className='border' ref={canvasRef} width={600} height={600}></canvas>
        </div>
    )
}

export default Snake;