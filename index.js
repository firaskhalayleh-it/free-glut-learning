// index.js

/**
 * Below is the full modified code. We have replaced the first two tutorials (ID: 9 and ID: 10) 
 * with simpler step-by-step examples that include line-by-line explanations. The rest of the 
 * tutorials and quizzes remain the same for demonstration.
 * 
 * We also set some default "mock code" in the CodeMirror editor, showing how one might 
 * conceptually "convert" a C++ OpenGL snippet into an equivalent WebGL/JavaScript code.
 * 
 * The WebGL section at the bottom still renders a rotating cube, but you can imagine 
 * substituting your own logic to replicate any C++ OpenGL code in JavaScript/WebGL.
 */

// ---------------------------------------------------------------------
//                         TUTORIALS & QUIZZES DATA
// ---------------------------------------------------------------------
const tutorialsData = [
    // Tutorial 9 (Replaced with a simple example)
    {
        id: 9,
        title: "Simple 2D Triangle (Step by Step)",
        content: `
        <!-- 
            Below is a very basic C++ OpenGL snippet that draws a 2D triangle.
            Each line is explained step by step.
        -->
        <pre><code>
// Include necessary headers
#include &lt;windows.h&gt;   // For Windows-specific functions (not needed on other OS)
#include &lt;GL/glut.h&gt;  // Main GLUT library for OpenGL

// Display callback function
void display() {
    // 1) Clear the screen and the depth buffer
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    // 2) Switch to ModelView matrix mode (to modify objects in the scene)
    glMatrixMode(GL_MODELVIEW);

    // 3) Load the identity matrix (reset any previous transformations)
    glLoadIdentity();

    // 4) Begin drawing a triangle
    glBegin(GL_TRIANGLES);

    // 4a) Set the color to Red
    glColor3f(1.0f, 0.0f, 0.0f);
    // 4b) Provide the first vertex at the left
    glVertex2f(-0.5f, -0.5f);

    // 4c) Set the color to Green
    glColor3f(0.0f, 1.0f, 0.0f);
    // 4d) Provide the second vertex at the right
    glVertex2f(0.5f, -0.5f);

    // 4e) Set the color to Blue
    glColor3f(0.0f, 0.0f, 1.0f);
    // 4f) Provide the third vertex at the top
    glVertex2f(0.0f, 0.5f);

    // 5) End the shape
    glEnd();

    // 6) Flush to render all commands
    glFlush();
}

// Main function
int main(int argc, char** argv) {
    // 1) Initialize GLUT
    glutInit(&argc, argv);

    // 2) Set display mode to single buffer, RGB color, and no depth
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);

    // 3) Set the window size to 500x500 pixels
    glutInitWindowSize(500, 500);

    // 4) Set the initial window position on the screen
    glutInitWindowPosition(100, 100);

    // 5) Create the window with a title
    glutCreateWindow("Simple 2D Triangle");

    // 6) Set the background color to white
    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);

    // 7) Register the display callback
    glutDisplayFunc(display);

    // 8) Enter the GLUT event loop (keeps the window running)
    glutMainLoop();

    return 0;
}
        </code></pre>
        `,
    },

    // Tutorial 10 (Replaced with another simple example)
    {
        id: 10,
        title: "Colored 2D Quad (Step by Step)",
        content: `
        <!-- 
            This example draws a single 2D quad with different colors at each vertex.
            Again, each line is annotated for clarity.
        -->
        <pre><code>
// Include necessary headers
#include &lt;windows.h&gt;   // For Windows-specific functions
#include &lt;GL/glut.h&gt;  // Main GLUT library for OpenGL

void display() {
    // Clear the screen
    glClear(GL_COLOR_BUFFER_BIT);

    // Switch to ModelView
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    // Begin drawing a quadrilateral
    glBegin(GL_QUADS);

    // Vertex 1 (Red)
    glColor3f(1.0f, 0.0f, 0.0f);
    glVertex2f(-0.5f, -0.5f);

    // Vertex 2 (Green)
    glColor3f(0.0f, 1.0f, 0.0f);
    glVertex2f(0.5f, -0.5f);

    // Vertex 3 (Blue)
    glColor3f(0.0f, 0.0f, 1.0f);
    glVertex2f(0.5f, 0.5f);

    // Vertex 4 (Yellow)
    glColor3f(1.0f, 1.0f, 0.0f);
    glVertex2f(-0.5f, 0.5f);

    glEnd(); // End the shape

    glFlush(); // Render to screen
}

int main(int argc, char** argv) {
    // Initialize GLUT
    glutInit(&argc, argv);

    // Single buffer, RGB color
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);

    // Window setup
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(150, 150);
    glutCreateWindow("Colored 2D Quad");

    // Background color
    glClearColor(0.8f, 0.8f, 0.8f, 1.0f);

    // Register display function
    glutDisplayFunc(display);

    // Enter main loop
    glutMainLoop();

    return 0;
}
        </code></pre>
        `,
    },

    // The rest of the tutorials remain the same:
    {
        id: 11,
        title: "Basic Transformations",
        content: `
    <p>Learn about basic transformations in OpenGL: translation, rotation, and scaling.</p>
    <pre><code>#include &lt;windows.h&gt;
#include &lt;GL/glut.h&gt;

void display(){
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    
    // Set camera
    gluLookAt(0.0, 0.0, 10.0, // Eye position
              0.0, 0.0, 0.0,  // Look-at point
              0.0, 1.0, 0.0); // Up vector
    
    // Apply transformations
    glTranslatef(-2.0f, 0.0f, 0.0f); // Translate left
    glRotatef(45.0f, 0.0f, 1.0f, 0.0f); // Rotate around Y-axis
    glScalef(1.0f, 2.0f, 1.0f); // Scale Y by 2
    
    // Draw a cube
    glColor3f(0.0f, 0.0f, 1.0f); // Blue
    glutSolidCube(2.0f);
    
    glFlush();
}

int main(int argc, char** argv){
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowPosition(150,150);
    glutInitWindowSize(600,600);
    glutCreateWindow("Basic Transformations Example");
    glClearColor(1.0, 1.0, 1.0, 1); // White background
    glEnable(GL_DEPTH_TEST); // Enable depth testing
    glutDisplayFunc(display);
    glutMainLoop();
}
</code></pre>
    `,
    },
    {
        id: 12,
        title: "Translate Animation",
        content: `
    <p>Create an animation where a cube moves back and forth along the X-axis using translation.</p>
    <pre><code>#include &lt;windows.h&gt;
#include &lt;GL/glut.h&gt;

// Translation variables
float posX = -5.0f;
float speed = 0.05f;

void display(){
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    
    // Set camera
    gluLookAt(0.0, 0.0, 15.0, // Eye position
              0.0, 0.0, 0.0,  // Look-at point
              0.0, 1.0, 0.0); // Up vector
    
    // Apply translation
    glTranslatef(posX, 0.0f, 0.0f);
    
    // Draw a cube
    glColor3f(1.0f, 0.0f, 0.0f); // Red
    glutSolidCube(2.0f);
    
    glFlush();
}

void idle(){
    posX += speed;
    if(posX > 5.0f || posX < -5.0f){
        speed = -speed; // Reverse direction
    }
    glutPostRedisplay();
}

int main(int argc, char** argv){
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowPosition(200,200);
    glutInitWindowSize(800,600);
    glutCreateWindow("Translate Animation Example");
    glClearColor(0.0, 0.0, 0.0, 1); // Black background
    glEnable(GL_DEPTH_TEST); // Enable depth testing
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glutMainLoop();
}
</code></pre>
    `,
    },
    {
        id: 13,
        title: "Scale Animation",
        content: `
    <p>This tutorial demonstrates how to create a scaling animation where a cube grows and shrinks over time.</p>
    <pre><code>#include &lt;windows.h&gt;
#include &lt;GL/glut.h&gt;

// Scaling variables
float scaleFactor = 1.0f;
float scaleSpeed = 0.01f;

void display(){
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    
    // Set camera
    gluLookAt(0.0, 0.0, 10.0,
              0.0, 0.0, 0.0,
              0.0, 1.0, 0.0);
    
    // Apply scaling
    glScalef(scaleFactor, scaleFactor, scaleFactor);
    
    // Draw a cube
    glColor3f(0.0f, 1.0f, 1.0f); // Cyan
    glutSolidCube(2.0f);
    
    glFlush();
}

void idle(){
    scaleFactor += scaleSpeed;
    if(scaleFactor > 2.0f || scaleFactor < 0.5f){
        scaleSpeed = -scaleSpeed; // Reverse scaling direction
    }
    glutPostRedisplay();
}

int main(int argc, char** argv){
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowPosition(250,250);
    glutInitWindowSize(600,600);
    glutCreateWindow("Scale Animation Example");
    glClearColor(0.9, 0.9, 0.9, 1); // Light gray background
    glEnable(GL_DEPTH_TEST); // Enable depth testing
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glutMainLoop();
}
</code></pre>
    `,
    },
    {
        id: 14,
        title: "Rotate and Scale Animation",
        content: `
    <p>Combine rotation and scaling animations to create a dynamic and visually appealing effect.</p>
    <pre><code>#include &lt;windows.h&gt;
#include &lt;GL/glut.h&gt;

// Rotation and Scaling variables
float angle = 0.0f;
float scaleFactor = 1.0f;
float scaleSpeed = 0.01f;

void display(){
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    
    // Set camera
    gluLookAt(0.0, 0.0, 10.0,
              0.0, 0.0, 0.0,
              0.0, 1.0, 0.0);
    
    // Apply rotation and scaling
    glRotatef(angle, 0.0f, 1.0f, 0.0f);
    glScalef(scaleFactor, scaleFactor, scaleFactor);
    
    // Draw a cube
    glColor3f(1.0f, 0.5f, 0.0f); // Orange
    glutSolidCube(2.0f);
    
    glFlush();
}

void idle(){
    angle += 0.5f;
    if(angle > 360.0f){
        angle -= 360.0f;
    }
    
    scaleFactor += scaleSpeed;
    if(scaleFactor > 2.0f || scaleFactor < 0.5f){
        scaleSpeed = -scaleSpeed; // Reverse scaling direction
    }
    
    glutPostRedisplay();
}

int main(int argc, char** argv){
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowPosition(300,300);
    glutInitWindowSize(600,600);
    glutCreateWindow("Rotate and Scale Animation Example");
    glClearColor(0.8, 0.8, 0.8, 1); // Light gray background
    glEnable(GL_DEPTH_TEST); // Enable depth testing
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glutMainLoop();
}
</code></pre>
    `,
    },
    // ... You can add more tutorials up to id: 20 if needed
];

const quizzesData = [
    // Quizzes associated with the tutorials
    {
        id: 9,
        tutorialId: 9,
        question: "Which function initiates the GLUT event loop in the triangle example?",
        options: {
            a: "glBegin()",
            b: "glFlush()",
            c: "glutMainLoop()",
            d: "gluLookAt()"
        },
        correct: "c"
    },
    {
        id: 10,
        tutorialId: 10,
        question: "Which primitive is used to draw the colored quad?",
        options: {
            a: "GL_TRIANGLES",
            b: "GL_QUADS",
            c: "GL_POLYGON",
            d: "GL_LINES"
        },
        correct: "b"
    },
    {
        id: 11,
        tutorialId: 11,
        question: "Which function scales objects in OpenGL?",
        options: {
            a: "glTranslatef()",
            b: "glRotatef()",
            c: "glScalef()",
            d: "glPushMatrix()"
        },
        correct: "c"
    },
    {
        id: 12,
        tutorialId: 12,
        question: "In the Translate Animation example, what happens when posX exceeds 5.0 or is less than -5.0?",
        options: {
            a: "The cube stops moving",
            b: "The cube's direction is reversed",
            c: "The cube disappears",
            d: "Nothing, the cube continues moving out of view"
        },
        correct: "b"
    },
    {
        id: 13,
        tutorialId: 13,
        question: "What does glScalef() do in OpenGL?",
        options: {
            a: "Rotates the object",
            b: "Translates the object",
            c: "Scales the object",
            d: "Sculpts the object"
        },
        correct: "c"
    },
    {
        id: 14,
        tutorialId: 14,
        question: "Which transformations are combined in the Rotate and Scale Animation example?",
        options: {
            a: "Translation and Rotation",
            b: "Rotation and Scaling",
            c: "Scaling and Translation",
            d: "Translation, Rotation, and Scaling"
        },
        correct: "b"
    },
    // ... Continue adding quizzes up to id: 20 following the same structure
];

// ---------------------------------------------------------------------
//                 GENERATE TUTORIALS & QUIZZES (DOM Manipulation)
// ---------------------------------------------------------------------
function generateTutorials() {
    const tutorialsSection = document.querySelector('.tutorials');
    tutorialsData.forEach(tutorial => {
        const tutorialDiv = document.createElement('div');
        tutorialDiv.classList.add('tutorial');
        tutorialDiv.setAttribute('data-tutorial-id', tutorial.id);
        tutorialDiv.innerHTML = `
            <h3>${tutorial.id}. ${tutorial.title}</h3>
            ${tutorial.content}
            <button class="btn-submit" onclick="completeTutorial(${tutorial.id})">Mark as Completed</button>
            <div class="result" id="result-tutorial${tutorial.id}"></div>
        `;
        tutorialsSection.appendChild(tutorialDiv);
    });
}

function generateQuizzes() {
    const quizzesSection = document.querySelector('.quizzes');
    quizzesData.forEach(quiz => {
        const quizDiv = document.createElement('div');
        quizDiv.classList.add('quiz');
        quizDiv.setAttribute('data-quiz-id', quiz.id);
        // Find corresponding tutorial title
        const tutorialTitle = tutorialsData.find(t => t.id === quiz.tutorialId).title;
        quizDiv.innerHTML = `
            <h3>Quiz ${quiz.id}: ${tutorialTitle}</h3>
            <p>${quiz.question}</p>
            <ul class="options">
                <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}a" value="a"><label for="quiz${quiz.id}a">A) ${quiz.options.a}</label></li>
                <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}b" value="b"><label for="quiz${quiz.id}b">B) ${quiz.options.b}</label></li>
                <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}c" value="c"><label for="quiz${quiz.id}c">C) ${quiz.options.c}</label></li>
                <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}d" value="d"><label for="quiz${quiz.id}d">D) ${quiz.options.d}</label></li>
            </ul>
            <button class="btn-submit" onclick="submitQuiz(${quiz.id})">Submit</button>
            <div class="result" id="result-quiz${quiz.id}"></div>
        `;
        quizzesSection.appendChild(quizDiv);
    });
}

// ---------------------------------------------------------------------
//               TUTORIAL & QUIZ COMPLETION / PROGRESS TRACKING
// ---------------------------------------------------------------------
function completeTutorial(tutorialId) {
    const tutorialDiv = document.querySelector(`.tutorial[data-tutorial-id="${tutorialId}"]`);
    tutorialDiv.style.display = 'none';
    updateProgress('tutorial');
}

function submitQuiz(quizId) {
    const quiz = quizzesData.find(q => q.id === quizId);
    const selectedOption = document.querySelector(`.quiz[data-quiz-id="${quizId}"] input[type="radio"]:checked`);
    const resultDiv = document.getElementById(`result-quiz${quizId}`);
    if(selectedOption) {
        if(selectedOption.value === quiz.correct) {
            resultDiv.innerHTML = '<span style="color: green;">Correct!</span>';
            updateProgress('quiz');
            // Prompt user to write code
            promptCodeWriting(quiz.tutorialId);
        } else {
            resultDiv.innerHTML = '<span style="color: red;">Incorrect. Try again.</span>';
        }
    } else {
        resultDiv.innerHTML = '<span style="color: red;">Please select an option.</span>';
    }
}

function promptCodeWriting(tutorialId) {
    alert("Great job! Now, write the corresponding code in the Code Editor and download it.");
    scrollToSection('code-editor');
}

// Keep track of how many tutorials/quizzes are completed
let tutorialsCompleted = 0;
let quizzesCompleted = 0;
const totalTutorials = tutorialsData.length;
const totalQuizzes = quizzesData.length;

function updateProgress(type) {
    if(type === 'tutorial') {
        tutorialsCompleted = Math.min(tutorialsCompleted + 1, totalTutorials);
        updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    } else if(type === 'quiz') {
        quizzesCompleted = Math.min(quizzesCompleted + 1, totalQuizzes);
        updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);
    }
}

function updateProgressBar(elementId, completed, total) {
    const progressPercentage = Math.min((completed / total) * 100, 100);
    const progressBar = document.getElementById(elementId);
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${Math.round(progressPercentage)}%`;
}

// ---------------------------------------------------------------------
//                     CODE EDITOR & DOWNLOAD FUNCTION
// ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Generate Tutorials and Quizzes on load
    generateTutorials();
    generateQuizzes();

    // Initialize progress bars
    updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);

    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor-textarea'), {
        lineNumbers: true,
        mode: "text/javascript",  // We'll just use JS mode for demonstration
        theme: "dracula",
        tabSize: 4,
        indentWithTabs: true,
        lineWrapping: true
    });

    // Set some default "mock code" to demonstrate converting from C++ to WebGL
    editor.setValue(`// Example of 'converted' WebGL code from a simple C++ snippet
// This uses JavaScript/WebGL to do something similar to the 2D triangle example.

function drawMockTriangle(gl) {
    // Define vertices in a float array
    const vertices = new Float32Array([
        //  X,   Y,  R,  G,  B
        -0.5, -0.5, 1, 0, 0,  // Red
         0.5, -0.5, 0, 1, 0,  // Green
         0.0,  0.5, 0, 0, 1   // Blue
    ]);

    // ...here you'd create buffers, compile shaders, etc.
    // For brevity, just show the array definition as a 'mock' of C++ code.
    console.log("Drawing triangle with vertices: ", vertices);
}

// You can expand this code, add buffers, compile shaders, etc.

drawMockTriangle(null); // Just a mock call
`);

    window.codeMirrorInstance = editor;
});

function downloadCode() {
    const code = window.codeMirrorInstance.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.cpp'; // or main.js, depending on your need
    a.click();
    URL.revokeObjectURL(url);
    const output = document.getElementById('output');
    output.innerHTML = '<span style="color: green;">Code downloaded successfully!</span>';
}

// Optional code validation (stub)
function validateCode() {
    const code = window.codeMirrorInstance.getValue();
    // A simple check for presence of certain words
    if(code.includes('vertices') && code.includes('drawMockTriangle')){
        alert('Your code contains some essential parts!');
    } else {
        alert('Please ensure you have the required data and function calls.');
    }
}

// ---------------------------------------------------------------------
//                 MOBILE NAVIGATION TOGGLE (IF USING CSS)
// ---------------------------------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// ---------------------------------------------------------------------
//                         SMOOTH SCROLL FUNCTION
// ---------------------------------------------------------------------
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
    });
}

// ---------------------------------------------------------------------
//                     WEBGL VISUALIZATION (Rotating Cube)
// ---------------------------------------------------------------------
function initWebGL() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        alert('WebGL not supported, falling back on experimental-webgl');
        return;
    }

    // Vertex shader program
    const vsSource = `
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main(void) {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            vColor = aVertexColor;
        }
    `;

    // Fragment shader program
    const fsSource = `
        varying lowp vec4 vColor;
        void main(void) {
            gl_FragColor = vColor;
        }
    `;

    // Initialize shader program
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Collect shader info
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

    // Initialize buffers for the cube
    const buffers = initBuffers(gl);

    let then = 0;

    // Render loop
    function render(now) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;

        drawScene(gl, programInfo, buffers, deltaTime);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

function initBuffers(gl) {
    // Create a buffer for cube's vertex positions
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Define the positions for a cube
    const positions = [
        // Front face
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,

        // Back face
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0, -1.0, -1.0,

        // Top face
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        // Right face
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0,  1.0,  1.0,
         1.0, -1.0,  1.0,

        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Set up colors for each face
    const faceColors = [
        [1.0, 0.0, 0.0, 1.0], // Front: red
        [0.0, 1.0, 0.0, 1.0], // Back: green
        [0.0, 0.0, 1.0, 1.0], // Top: blue
        [1.0, 1.0, 0.0, 1.0], // Bottom: yellow
        [1.0, 0.0, 1.0, 1.0], // Right: purple
        [0.0, 1.0, 1.0, 1.0], // Left: cyan
    ];

    let colors = [];
    for (let j = 0; j < faceColors.length; ++j) {
        const c = faceColors[j];
        // Repeat each color 4 times for the four vertices of the face
        colors = colors.concat(c, c, c, c);
    }

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // Build the element array buffer for cube's indices
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    const indices = [
         0,  1,  2,   0,  2,  3,  // front
         4,  5,  6,   4,  6,  7,  // back
         8,  9, 10,   8, 10, 11,  // top
        12, 13, 14,  12, 14, 15,  // bottom
        16, 17, 18,  16, 18, 19,  // right
        20, 21, 22,  20, 22, 23,  // left
    ];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    return {
        position: positionBuffer,
        color: colorBuffer,
        indices: indexBuffer,
    };
}

function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// Global rotation for the cube
let cubeRotation = 0.0;

function drawScene(gl, programInfo, buffers, deltaTime) {
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix
    const fieldOfView = 45 * Math.PI / 180;
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Set the drawing position to the "identity" point
    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -8.0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0, 1, 0]);

    // Position buffer
    {
        const numComponents = 3;  // x, y, z
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            numComponents,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }

    // Color buffer
    {
        const numComponents = 4;  // r, g, b, a
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexColor,
            numComponents,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    }

    // Index buffer
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Use our program
    gl.useProgram(programInfo.program);

    // Set shader uniforms
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    {
        const vertexCount = 36;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

    cubeRotation += deltaTime;
}

// Simple mat4 library for transformations
const mat4 = {
    create: function() {
        return new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    },
    perspective: function(out, fovy, aspect, near, far) {
        const f = 1.0 / Math.tan(fovy / 2);
        const nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;
        return out;
    },
    translate: function(out, a, v) {
        let x = v[0], y = v[1], z = v[2];
        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
            let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
            out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
            out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }
        return out;
    },
    rotate: function(out, a, rad, axis) {
        let x = axis[0], y = axis[1], z = axis[2];
        let len = Math.hypot(x, y, z);
        if (len < 0.000001) { return null; }
        len = 1 / len; x *= len; y *= len; z *= len;
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        const t = 1 - c;
        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        // Rotation matrix
        const b00 = x * x * t + c,     b01 = y * x * t + z * s, b02 = z * x * t - y * s;
        const b10 = x * y * t - z * s, b11 = y * y * t + c,     b12 = z * y * t + x * s;
        const b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        // Perform rotation
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    },
};
