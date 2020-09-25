import React from 'react';
import './ProjectSection.css';
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import Row from 'react-bootstrap/Row'


import {BubblifyImg,
    PuzzleGameImg,
    BubblesTogetherImg,
    ColorGameImg,
    TodoListImg,
    WebsiteImg,
    DebugDuckImg,
    PongImg,
    FractalTreeImg,
    GameOfLifeImg} from '../img'

function ProjectSection() {
    const projects = [
        {
          title: 'This Website!',
          description: ['Mobile-friendly responsive personal portfolio website', 
                        'Smooth animations encourage interaction',
                        'Night mode button offers two aesthetic color modes',
                        'Currently under development ;)'],
          languages: ['ReactJS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
          link: "https://binoy.co/",
          img: WebsiteImg,
          featured: true,
          codeLink: "https://github.com/binoy-d/portfolio-website",
          longDescription:  'This is the second version of my personal portfolio website. '+
                            'The previous version of this website was done working off of'+
                            ' a bootstrap template, with major customizations done down the line.'+
                            ' It was a great learning experience for me, but after some time '+
                            'I felt unsatisfied with it. I decided to do a complete overhaul '+
                            'of the site, both visually and behind the scenes.\n I started by listing '+
                            'every issue I had with version 1. These included being too "bootstrappy", '+
                            'lacking a single cohesive color scheme, irrelevant pages, bloat, and parts '+
                            ' breaking on mobile. From there, I started learning React following a course '+
                            'on LinkedIn Learning. Using what I learned, I started building and rebuilding'+
                            ' the website. I iterated through many different layouts, color schemes, and '+
                            'component tree structures until I arrived at this one. I used libraries such'+
                            ' as react-reveal react-particles-js, and more to achieve many of the effects. '+
                            'Overall, this has been a great learning experience for me, and I will continue'+
                            ' to update it. '
        },
        {
          title: 'Bubbles, Together',
          description: ['Website allowing users to concurrently draw with bubbles',
                        'Particle effects and graphics done with p5.js',
                        'Backend written in NodeJS using SocketIO, hosted on Heroku'],
          languages: ['p5.js', 'Node', 'JavaScript', 'SocketIO', 'Heroku'],
          link: "https://bubbles-together.herokuapp.com/",
          img: BubblesTogetherImg,
          featured: true,
          codeLink: "https://github.com/binoy-d/particle-draw2",
          longDescription:  'I have always loved simple, beautiful particle effects.'+
                            'Any user that visits this website can generate randomly colored'+
                            ' bubbles by clicking and dragging their mouse around the screen. '+
                            'All users who are on the site at the same time can also see eachother\'s'+
                            ' bubbles. This makes for a fun, interactive shared experience for '+
                            ' users as they play around drawing shapes and often writing things in bubbles'+
                            ' The front end as well as all particle effects are done using p5.js, a port'+
                            ' of Processing to JavaScript. The backend is a NodeJS server using SocketIO'+
                            ' to communicate. Interestingly, the only data I send back and forth is '+
                            'the mouse positions. The bubble creation is handled on the front end '+
                            'for speed purposes. This means that though each client gets roughly the same'+
                            'view, there will be slight differences as each client generates their own'+
                            'version of the current state.'
        },
        {
          title: 'Puzzle Game',
          description: ['Turn based puzzle game with retro aesthetic',
                        'Written purely with Java and standard libraries',
                        'Reads custom map files as matrix of tiles'],
          languages: ['Java', 'Graphics2D'],
          link: "https://github.com/binoy-d/2p1p-puzzle-game",
          img: PuzzleGameImg,
          featured: true,
          codeLink: "https://github.com/binoy-d/2p1p-puzzle-game",
          longDescription:  "A puzzle game I made as a sophomore. The player uses the arrow keys to "+
                            'move two characters at once. Avoid lava and moving enemies to get to the'+
                            ' green goals. Have fun trying to find the fastest solution for each level!'+
                            'This was one of the first "complete" games I had written, and has a soft spot'+
                            ' in my heart. I\'m especially proud of this because its a genuinly fun game to play'+
                            ' and often players find themselves hooked after the first few levels.'+
                            ' One day, I might recreate this in C# or some other language with more levels.'
        },
        {
          title: 'Debug Duck',
          description: ['Story based TDS video game written in 48 hours for GGJ 2020',
                        'Play as the duck from "rubber duck debugging"',
                        'My role: Programming in c# and creating assets'],
          languages: ['Java', 'Graphics2D'],
          link: "https://globalgamejam.org/2020/games/debug-duck-2",
          img: DebugDuckImg,
          featured: true,
          codeLink: "https://github.com/binoy-d/debug-duck",
          longDescription:  "This was my first time going to a game jam, and I went with my friend Evan Cheng"+
                            '(https://frolicks.itch.io/) From there, we met a few more people and formed a team.'+
                            'My role was both in programming and creating assets. The 2020 theme was "repair", and we brainstormed many ideas before settling on the '+
                            'concept of fixing code. Often times, programmers do what is called "rubber duck debugging"'+
                            ' in which one explains their problems to a rubber duck to help think through it. '+
                            ' In the game, you play as the rubber duck, solving your programmer\'s bugs.'+
                            ' As you fix more bugs, the game fixes itself by changing its own mechanics. '+
                            'As the programmer relies more and more on your fixing, he begins bringing up'+
                            ' problems in his personal life as well, and it becomes your job to solve those'+
                            ' as well by changing negative thoughts into healthy ones. The game can be described'+
                            ' as a TDS interactive fiction experience.'
                      
        },
        {
          title: 'Game of Life',
          description: ['Minimalist clone of Conway\'s Game of life',
                        'Features play, pause, toggle cell state, and randomize',
                        'Done as a project to begin learning C#'],
          languages: ['C#', '.NET'],
          link: "https://github.com/binoy-d/Game-Of-Life",
          img: GameOfLifeImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/Game-Of-Life",
          longDescription: "this is a test"
        },
        {
          title: 'Fractal Tree',
          description: ['Demonstrates recursion by drawing a fractal tree',
                        'Users change starting node position, length, and angle of branches'],
          languages: ['p5.js', 'JavaScript', 'HTML', 'CSS'],
          link: "https://binoy-d.github.io/fractal-tree",
          img: FractalTreeImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/fractal-tree",
          longDescription: "this is a test"
        },
        {
          title: 'Color Game',
          description: [
                        'Guess which color is represented from rgb value',
                        'Bootstrap for responsive layout, with smooth fades in CSS'],
          languages: ['Bootstrap', 'CSS', 'JavaScript'],
          link: "https://binoy-d.github.io/color-game/",
          img: ColorGameImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/color-game",
          longDescription: "this is a test"
        },
        
        {
          title: 'Bubblify',
          description: ['Recreates any online image out of bubbles',
                        'Visualization done with p5.js',
                        'Bubblified images can be downloaded'],
          languages: ['p5.js', 'HTML', 'CSS', 'JavaScript'],
          link: "https://binoy-d.github.io/bubblify",
          img: BubblifyImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/bubblify",
          longDescription: "this is a test"
        },
        {
          title: 'To Do List',
          description: ['To Do List app with clean interface',
                        'Add, delete, mark as done, add new list'],
          languages: ['jQuery', 'JavaScript', 'Bootstrap', 'CSS'],
          link: "https://binoy-d.github.io/to-do-app/",
          img: TodoListImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/to-do-app",
          longDescription: "this is a test"
        },
        {
          title: 'Pong',
          description: ['The classic game of pong',
                        'Smooth movement and responsive controls'],
          languages: ['Processing'],
          link: "https://github.com/binoy-d/pong",
          img: PongImg,
          featured: false,
          codeLink: "https://github.com/binoy-d/pong",
          longDescription: "this is a test"
        }
      ]

    return (
        <section id ="projects">
          <div class="projects-stuff">
          <SectionHeader  text="Projects"/>
            <Container>
                <Row>
                  
                {projects.map((proj, index)=>
               
                    <ProjectCard proj={proj} side={index%2}/>
                    
                )}
                
                </Row>
            </Container>
            </div>
        </section>
    );
}

export default ProjectSection;
