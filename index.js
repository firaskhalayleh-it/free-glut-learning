// Sample Data for Tutorials and Quizzes
const tutorialsData = [
    {
        id: 1,
        title: "Introduction to FreeGLUT",
        content: `
<p>FreeGLUT is an open-source alternative to the OpenGL Utility Toolkit (GLUT) library. It provides a simple API for creating windows, handling input, and managing the OpenGL context.</p>
<p><strong>Key Features:</strong></p>
<ul>
    <li>Window creation and management</li>
    <li>Input handling (keyboard, mouse)</li>
    <li>Callback functions for rendering and events</li>
</ul>
<pre><code>#include <GL/freeglut.h>

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("FreeGLUT Window");
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 2,
        title: "Setting Up Code::Blocks with FreeGLUT",
        content: `
<p>Follow these steps to set up FreeGLUT in Code::Blocks:</p>
<ol>
    <li><strong>Download FreeGLUT:</strong> Visit the <a href="https://sourceforge.net/projects/freeglut/" target="_blank">FreeGLUT SourceForge page</a> and download the latest version.</li>
    <li><strong>Extract Files:</strong> Extract the downloaded files to a directory, e.g., <code>C:\\FreeGLUT</code>.</li>
    <li><strong>Configure Code::Blocks:</strong>
        <ul>
            <li>Open Code::Blocks and create a new project.</li>
            <li>Go to <strong>Project &gt; Build options</strong>.</li>
            <li>Add the FreeGLUT <code>include</code> directory in the Compiler settings.</li>
            <li>Add the FreeGLUT <code>lib</code> directory in the Linker settings.</li>
            <li>Link against <code>freeglut.lib</code>, <code>opengl32.lib</code>, <code>glu32.lib</code>, and <code>gdi32.lib</code>.</li>
        </ul>
    </li>
</ol>
<pre><code>// Example Code::Blocks Configuration
// Compiler Settings > Search directories > Compiler: C:\\FreeGLUT\\include
// Linker Settings > Search directories > Linker: C:\\FreeGLUT\\lib
// Linker Settings > Link libraries: freeglut.lib; opengl32.lib; glu32.lib; gdi32.lib</code></pre>
`
    },
    {
        id: 3,
        title: "Basic OpenGL Rendering with FreeGLUT",
        content: `
<p>Learn how to render a simple triangle using FreeGLUT and OpenGL.</p>
<pre><code>#include <GL/freeglut.h>

// Rotation angle
float angle = 0.0f;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Rotate the triangle
    glRotatef(angle, 0.0f, 1.0f, 0.0f);

    // Draw a colored triangle
    glBegin(GL_TRIANGLES);
        glColor3f(1.0f, 0.0f, 0.0f); // Red
        glVertex3f(-0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 1.0f, 0.0f); // Green
        glVertex3f(0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 0.0f, 1.0f); // Blue
        glVertex3f(0.0f, 0.5f, 0.0f);
    glEnd();

    glutSwapBuffers();
}

// Idle callback for animation
void idle() {
    angle += 0.1f;
    if (angle > 360.0f)
        angle -= 360.0f;
    glutPostRedisplay();
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering and RGB colors with depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT Rotating Triangle");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutIdleFunc(idle);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 4,
        title: "Handling Keyboard and Mouse Input",
        content: `
<p>Learn how to handle user input using FreeGLUT's callback functions.</p>
<pre><code>#include <GL/freeglut.h>

// Rotation angle
float angle = 0.0f;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Rotate the triangle
    glRotatef(angle, 0.0f, 1.0f, 0.0f);

    // Draw a colored triangle
    glBegin(GL_TRIANGLES);
        glColor3f(1.0f, 0.0f, 0.0f); // Red
        glVertex3f(-0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 1.0f, 0.0f); // Green
        glVertex3f(0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 0.0f, 1.0f); // Blue
        glVertex3f(0.0f, 0.5f, 0.0f);
    glEnd();

    glutSwapBuffers();
}

// Idle callback for animation
void idle() {
    angle += 0.1f;
    if (angle > 360.0f)
        angle -= 360.0f;
    glutPostRedisplay();
}

// Keyboard callback
void handleKeypress(unsigned char key, int x, int y) {
    switch(key) {
        case 27: // ESC key
            exit(0);
            break;
        case 'r': // Reset rotation
            angle = 0.0f;
            break;
    }
}

// Mouse callback
void handleMouse(int button, int state, int x, int y) {
    if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN) {
        angle += 10.0f;
    }
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering and RGB colors with depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT Input Handling");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glutKeyboardFunc(handleKeypress);
    glutMouseFunc(handleMouse);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 5,
        title: "Animations and Timers",
        content: `
<p>Implement animations using FreeGLUT's timer functions.</p>
<pre><code>#include <GL/freeglut.h>

// Rotation angle
float angle = 0.0f;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Rotate the triangle
    glRotatef(angle, 0.0f, 1.0f, 0.0f);

    // Draw a colored triangle
    glBegin(GL_TRIANGLES);
        glColor3f(1.0f, 0.0f, 0.0f); // Red
        glVertex3f(-0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 1.0f, 0.0f); // Green
        glVertex3f(0.5f, -0.5f, 0.0f);
        
        glColor3f(0.0f, 0.0f, 1.0f); // Blue
        glVertex3f(0.0f, 0.5f, 0.0f);
    glEnd();

    glutSwapBuffers();
}

// Timer callback for animation
void timer(int value) {
    angle += 1.0f;
    if (angle > 360.0f)
        angle -= 360.0f;
    glutPostRedisplay();
    glutTimerFunc(16, timer, 0); // Approximately 60 FPS
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering, RGB colors, and depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT Animation");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutTimerFunc(0, timer, 0);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 6,
        title: "3D Rendering with FreeGLUT",
        content: `
<p>Extend your knowledge to render 3D objects using FreeGLUT and OpenGL.</p>
<pre><code>#include <GL/freeglut.h>

// Rotation angles
float angleX = 0.0f;
float angleY = 0.0f;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Move back to see the cube
    glTranslatef(0.0f, 0.0f, -5.0f);

    // Rotate the cube
    glRotatef(angleX, 1.0f, 0.0f, 0.0f);
    glRotatef(angleY, 0.0f, 1.0f, 0.0f);

    // Draw a cube
    glutSolidCube(2.0f);

    glutSwapBuffers();
}

// Idle callback for animation
void idle() {
    angleX += 0.3f;
    angleY += 0.2f;
    if (angleX > 360.0f)
        angleX -= 360.0f;
    if (angleY > 360.0f)
        angleY -= 360.0f;
    glutPostRedisplay();
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering, RGB colors, and depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT 3D Cube");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutIdleFunc(idle);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 7,
        title: "Lighting and Shading",
        content: `
<p>Implement basic lighting and shading to enhance the visual appearance of your 3D objects.</p>
<pre><code>#include <GL/freeglut.h>

// Rotation angles
float angleX = 0.0f;
float angleY = 0.0f;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Move back to see the cube
    glTranslatef(0.0f, 0.0f, -5.0f);

    // Rotate the cube
    glRotatef(angleX, 1.0f, 0.0f, 0.0f);
    glRotatef(angleY, 0.0f, 1.0f, 0.0f);

    // Set material properties
    GLfloat mat_specular[] = {1.0, 1.0, 1.0, 1.0};
    GLfloat mat_shininess[] = {50.0};
    glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
    glMaterialfv(GL_FRONT, GL_SHININESS, mat_shininess);

    // Enable lighting
    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    // Draw a cube
    glutSolidCube(2.0f);

    glutSwapBuffers();
}

// Idle callback for animation
void idle() {
    angleX += 0.3f;
    angleY += 0.2f;
    if (angleX > 360.0f)
        angleX -= 360.0f;
    if (angleY > 360.0f)
        angleY -= 360.0f;
    glutPostRedisplay();
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    // Light properties
    GLfloat light_ambient[]  = { 0.2f, 0.2f, 0.2f, 1.0f };
    GLfloat light_diffuse[]  = { 0.8f, 0.8f, 0.8f, 1.0f };
    GLfloat light_specular[] = { 1.0f, 1.0f, 1.0f, 1.0f };
    GLfloat light_position[] = { 1.0f, 1.0f, 1.0f, 0.0f };

    glLightfv(GL_LIGHT0, GL_POSITION, light_position);
    glLightfv(GL_LIGHT0, GL_AMBIENT,  light_ambient);
    glLightfv(GL_LIGHT0, GL_DIFFUSE,  light_diffuse);
    glLightfv(GL_LIGHT0, GL_SPECULAR, light_specular);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering, RGB colors, and depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT Lighting and Shading");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutIdleFunc(idle);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    {
        id: 8,
        title: "Texture Mapping",
        content: `
<p>Apply textures to your 3D objects to add realism.</p>
<pre><code>#include <GL/freeglut.h>
#include <SOIL/SOIL.h>

// Rotation angles
float angleX = 0.0f;
float angleY = 0.0f;

// Texture ID
GLuint texture;

// Display callback
void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Move back to see the cube
    glTranslatef(0.0f, 0.0f, -5.0f);

    // Rotate the cube
    glRotatef(angleX, 1.0f, 0.0f, 0.0f);
    glRotatef(angleY, 0.0f, 1.0f, 0.0f);

    // Enable texturing
    glEnable(GL_TEXTURE_2D);
    glBindTexture(GL_TEXTURE_2D, texture);

    // Draw a textured cube
    glutSolidCube(2.0f);

    glDisable(GL_TEXTURE_2D);

    glutSwapBuffers();
}

// Idle callback for animation
void idle() {
    angleX += 0.3f;
    angleY += 0.2f;
    if (angleX > 360.0f)
        angleX -= 360.0f;
    if (angleY > 360.0f)
        angleY -= 360.0f;
    glutPostRedisplay();
}

// Initialize OpenGL settings
void initGL() {
    glEnable(GL_DEPTH_TEST);
    glClearColor(0.2f, 0.2f, 0.2f, 1.0f);

    // Load texture
    texture = SOIL_load_OGL_texture(
        "texture.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_INVERT_Y
    );

    if(texture == 0) {
        printf("Failed to load texture\n");
    }

    // Texture parameters
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);	
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
}

// Main function
int main(int argc, char** argv) {
    glutInit(&argc, argv);
    // Use double buffering, RGB colors, and depth buffer
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    // Set window size
    glutInitWindowSize(800, 600);
    // Create window with title
    glutCreateWindow("FreeGLUT Texture Mapping");

    initGL();

    // Register callbacks
    glutDisplayFunc(display);
    glutIdleFunc(idle);

    // Enter the main loop
    glutMainLoop();
    return 0;
}</code></pre>
`
    },
    // Add tutorials 9-20 similarly following the same structure
    // For brevity, only 8 tutorials are shown here.
];

const quizzesData = [
    {
        id: 1,
        tutorialId: 1,
        question: "What is FreeGLUT primarily used for?",
        options: {
            a: "Handling network operations",
            b: "Creating windows and handling input in OpenGL applications",
            c: "Database management",
            d: "Image processing"
        },
        correct: "b"
    },
    {
        id: 2,
        tutorialId: 2,
        question: "Which library is NOT required to link when setting up FreeGLUT in Code::Blocks?",
        options: {
            a: "freeglut.lib",
            b: "opengl32.lib",
            c: "glu32.lib",
            d: "socket.lib"
        },
        correct: "d"
    },
    {
        id: 3,
        tutorialId: 3,
        question: "Which function initializes GLUT and processes command-line arguments?",
        options: {
            a: "glutInit()",
            b: "glutCreateWindow()",
            c: "glutMainLoop()",
            d: "glutDisplayFunc()"
        },
        correct: "a"
    },
    {
        id: 4,
        tutorialId: 4,
        question: "Which callback function handles keyboard input in FreeGLUT?",
        options: {
            a: "glutKeyboardFunc()",
            b: "glutMouseFunc()",
            c: "glutDisplayFunc()",
            d: "glutIdleFunc()"
        },
        correct: "a"
    },
    {
        id: 5,
        tutorialId: 5,
        question: "What is the purpose of glutTimerFunc() in FreeGLUT?",
        options: {
            a: "To handle keyboard input",
            b: "To create a window",
            c: "To set up a recurring timer callback",
            d: "To draw shapes"
        },
        correct: "c"
    },
    {
        id: 6,
        tutorialId: 6,
        question: "Which function is used to create a solid cube in FreeGLUT?",
        options: {
            a: "glutWireCube()",
            b: "glutSolidCube()",
            c: "glutCube()",
            d: "glutCreateCube()"
        },
        correct: "b"
    },
    {
        id: 7,
        tutorialId: 7,
        question: "Which function enables lighting in OpenGL?",
        options: {
            a: "glEnable(GL_DEPTH_TEST)",
            b: "glEnable(GL_LIGHTING)",
            c: "glEnable(GL_COLOR_MATERIAL)",
            d: "glEnable(GL_TEXTURE_2D)"
        },
        correct: "b"
    },
    {
        id: 8,
        tutorialId: 8,
        question: "Which library is commonly used to load textures in OpenGL?",
        options: {
            a: "SDL",
            b: "GLFW",
            c: "SOIL",
            d: "FreeImage"
        },
        correct: "c"
    },
    {
        id: 9,
        tutorialId: 9,
        question: "What property controls the shininess of a material in OpenGL?",
        options: {
            a: "GL_AMBIENT",
            b: "GL_DIFFUSE",
            c: "GL_SPECULAR",
            d: "GL_SHININESS"
        },
        correct: "d"
    },
    // ... Continue adding quizzes up to id: 20 following the same structure
];

// Function to generate Tutorials
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

// Function to generate Quizzes
function generateQuizzes() {
    const quizzesSection = document.querySelector('.quizzes');
    quizzesData.forEach(quiz => {
        const quizDiv = document.createElement('div');
        quizDiv.classList.add('quiz');
        quizDiv.setAttribute('data-quiz-id', quiz.id);
        quizDiv.innerHTML = `
            <h3>Quiz ${quiz.id}: ${tutorialsData.find(t => t.id === quiz.tutorialId).title}</h3>
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

// Function to handle Tutorial Completion
function completeTutorial(tutorialId) {
    const tutorialDiv = document.querySelector(`.tutorial[data-tutorial-id="${tutorialId}"]`);
    tutorialDiv.style.display = 'none';
    updateProgress('tutorial');
}

// Function to handle Quiz Submission
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
    // Notify user to write code
    alert("Great job! Now, write the corresponding code in the Code Editor and download it.");
    // Optionally, scroll to the code editor
    scrollToSection('code-editor');
}

// Progress Tracker Variables
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

// Initialize Progress Tracker and Content
document.addEventListener('DOMContentLoaded', () => {
    // Generate Tutorials and Quizzes
    generateTutorials();
    generateQuizzes();

    // Initialize progress bars
    updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);

    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor-textarea'), {
        lineNumbers: true,
        mode: "text/x-c++src",
        theme: "dracula",
        tabSize: 4,
        indentWithTabs: true,
        lineWrapping: true
    });
    window.codeMirrorInstance = editor;
});

// Code Editor Download Function
function downloadCode() {
    const code = window.codeMirrorInstance.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.cpp';
    a.click();
    URL.revokeObjectURL(url);
    const output = document.getElementById('output');
    output.innerHTML = '<span style="color: green;">Code downloaded successfully!</span>';
}

// Mobile Navigation Toggle
 menuToggle = document.querySelector('.menu-toggle');
 navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
    });
}

// WebGL Visualization
function initWebGL() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        alert('WebGL not supported, falling back on experimental-webgl');
        return;
    }

    if (!gl) {
        alert('Your browser does not support WebGL');
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

    // Initialize buffers
    const buffers = initBuffers(gl);

    let then = 0;

    // Draw the scene repeatedly
    function render(now) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;

        drawScene(gl, programInfo, buffers, deltaTime);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// Initialize buffers
function initBuffers(gl) {
    // Create a buffer for the cube's vertex positions.
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

    // Set up the colors for the faces. We'll use solid colors for each face.
    const faceColors = [
        [1.0, 0.0, 0.0, 1.0],    // Front face: red
        [0.0, 1.0, 0.0, 1.0],    // Back face: green
        [0.0, 0.0, 1.0, 1.0],    // Top face: blue
        [1.0, 1.0, 0.0, 1.0],    // Bottom face: yellow
        [1.0, 0.0, 1.0, 1.0],    // Right face: purple
        [0.0, 1.0, 1.0, 1.0],    // Left face: cyan
    ];

    // Convert the array of colors into a table for all the vertices.
    let colors = [];

    for (let j = 0; j < faceColors.length; ++j) {
        const c = faceColors[j];

        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(c, c, c, c);
    }

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // Build the element array buffer; this specifies the indices into the vertex arrays for each face's vertices.
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // This array defines each face as two triangles, using the indices into the vertex array to specify each triangle's position.
    const indices = [
        0,  1,  2,      0,  2,  3,    // front
        4,  5,  6,      4,  6,  7,    // back
        8,  9, 10,      8, 10, 11,    // top
        12, 13, 14,     12, 14, 15,   // bottom
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23,   // left
    ];

    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    return {
        position: positionBuffer,
        color: colorBuffer,
        indices: indexBuffer,
    };
}

// Initialize shader program
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Create the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Creates a shader of the given type, uploads the source and compiles it.
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    // Send the source to the shader object
    gl.shaderSource(shader, source);

    // Compile the shader program
    gl.compileShader(shader);

    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

// Draw the scene.
let cubeRotation = 0.0;

function drawScene(gl, programInfo, buffers, deltaTime) {
    gl.clearColor(0.1, 0.1, 0.1, 1.0);  // Clear to dark gray, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // Note: glmatrix.js always has the first argument as the destination to receive the result.
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);

    // Set the drawing position to the "identity" point, which is the center of the scene.
    const modelViewMatrix = mat4.create();

    // Move the drawing position a bit to where we want to start drawing the cube.
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   [0.0, 0.0, -6.0]);  // amount to translate
    mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                cubeRotation,     // amount to rotate in radians
                [0, 0, 1]);       // axis to rotate around (Z)
    mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                cubeRotation * .7,// amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around (Y)

    // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute.
    {
        const numComponents = 3;
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
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexPosition);
    }

    // Tell WebGL how to pull out the colors from the color buffer into the vertexColor attribute.
    {
        const numComponents = 4;
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
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexColor);
    }

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    // Set the shader uniforms
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

    {
        const vertexCount = 36;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

    // Update the rotation for the next draw
    cubeRotation += deltaTime;
}

// Simple matrix library for transformations
const mat4 = {
    create: function() {
        return new Float32Array([1, 0, 0, 0,
                                 0, 1, 0, 0,
                                 0, 0, 1, 0,
                                 0, 0, 0, 1]);
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
            let a00, a01, a02, a03;
            let a10, a11, a12, a13;
            let a20, a21, a22, a23;

            a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
            a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
            a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a03;
            out[4] = a10;
            out[5] = a11;
            out[6] = a12;
            out[7] = a13;
            out[8] = a20;
            out[9] = a21;
            out[10] = a22;
            out[11] = a23;

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

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        const s = Math.sin(rad);
        const c = Math.cos(rad);
        const t = 1 - c;

        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];

        // Construct the elements of the rotation matrix
        const b00 = x * x * t + c,     b01 = y * x * t + z * s, b02 = z * x * t - y * s;
        const b10 = x * y * t - z * s, b11 = y * y * t + c,     b12 = z * y * t + x * s;
        const b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;

        // Perform rotation-specific matrix multiplication
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

        // No perspective component
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
};

// Function to generate Tutorials and Quizzes
function generateContent() {
    generateTutorials();
    generateQuizzes();
}

// Function to handle Tutorial Completion
function completeTutorial(tutorialId) {
    const tutorialDiv = document.querySelector(`.tutorial[data-tutorial-id="${tutorialId}"]`);
    tutorialDiv.style.display = 'none';
    updateProgress('tutorial');
}

// Function to handle Quiz Submission
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
    // Notify user to write code
    alert("Great job! Now, write the corresponding code in the Code Editor and download it.");
    // Optionally, scroll to the code editor
    scrollToSection('code-editor');
}

// Progress Tracker Variables
 tutorialsCompleted = 0;
 quizzesCompleted = 0;
 totalTutorials = tutorialsData.length;
 totalQuizzes = quizzesData.length;

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

// Initialize Progress Tracker and Content
document.addEventListener('DOMContentLoaded', () => {
    // Generate Tutorials and Quizzes
    generateContent();

    // Initialize progress bars
    updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);

    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor-textarea'), {
        lineNumbers: true,
        mode: "text/x-c++src",
        theme: "dracula",
        tabSize: 4,
        indentWithTabs: true,
        lineWrapping: true
    });
    window.codeMirrorInstance = editor;
});

// Code Editor Download Function
function downloadCode() {
    const code = window.codeMirrorInstance.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.cpp';
    a.click();
    URL.revokeObjectURL(url);
    const output = document.getElementById('output');
    output.innerHTML = '<span style="color: green;">Code downloaded successfully!</span>';
}

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
    });
}

// WebGL Visualization
function initWebGL() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        alert('WebGL not supported, falling back on experimental-webgl');
        return;
    }

    if (!gl) {
        alert('Your browser does not support WebGL');
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

    // Initialize buffers
    const buffers = initBuffers(gl);

    let then = 0;

    // Draw the scene repeatedly
    function render(now) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;

        drawScene(gl, programInfo, buffers, deltaTime);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// Initialize WebGL after window loads
window.onload = function() {
    initWebGL();
};
