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
`,
        expectedCode: "glutCreateWindow"
    },
    {
        id: 2,
        title: "Geometric Primitives",
        content: `
<p>In OpenGL, geometric primitives are the basic shapes used to construct more complex 3D models. Understanding these primitives is essential for creating graphics applications.</p>
<p><strong>Common Primitives:</strong></p>
<ul>
    <li>Points</li>
    <li>Lines</li>
    <li>Triangles</li>
    <li>Quads</li>
</ul>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glBegin(GL_TRIANGLES);
        glVertex2f(-0.5f, -0.5f); // Vertex 1
        glVertex2f(0.5f, -0.5f);  // Vertex 2
        glVertex2f(0.0f, 0.5f);   // Vertex 3
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("Geometric Primitives");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glBegin(GL_TRIANGLES)"
    },
    {
        id: 3,
        title: "Geometry Primitives: House",
        content: `
<p>Let's create a simple house using geometric primitives in OpenGL.</p>
<p><strong>Components:</strong></p>
<ul>
    <li>Square for the base</li>
    <li>Triangle for the roof</li>
</ul>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Draw base of the house
    glBegin(GL_QUADS);
        glColor3f(0.7f, 0.7f, 0.7f); // Gray color
        glVertex2f(-0.5f, -0.5f); // Bottom Left
        glVertex2f(0.5f, -0.5f);  // Bottom Right
        glVertex2f(0.5f, 0.0f);   // Top Right
        glVertex2f(-0.5f, 0.0f);  // Top Left
    glEnd();

    // Draw roof of the house
    glBegin(GL_TRIANGLES);
        glColor3f(1.0f, 0.0f, 0.0f); // Red color
        glVertex2f(-0.6f, 0.0f); // Left
        glVertex2f(0.6f, 0.0f);  // Right
        glVertex2f(0.0f, 0.5f);  // Top
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("Geometry Primitives: House");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glBegin(GL_QUADS)"
    },
    {
        id: 4,
        title: "Change Color by Mouse Clicks",
        content: `
<p>Learn how to change the color of a shape based on mouse clicks using FreeGLUT's input handling.</p>
<p><strong>Implementation Steps:</strong></p>
<ol>
    <li>Set up the display callback to draw a shape.</li>
    <li>Implement the mouse callback to detect clicks.</li>
    <li>Change the color based on mouse button pressed.</li>
</ol>
<pre><code>#include <GL/freeglut.h>

float colorR = 0.0f, colorG = 0.0f, colorB = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(colorR, colorG, colorB); // Dynamic color
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.5f, -0.5f);
        glVertex2f(0.5f, -0.5f);
        glVertex2f(0.0f, 0.5f);
    glEnd();

    glFlush();
}

void handleMouse(int button, int state, int x, int y) {
    if(state == GLUT_DOWN) {
        switch(button) {
            case GLUT_LEFT_BUTTON:
                colorR = 1.0f; colorG = 0.0f; colorB = 0.0f; // Red
                break;
            case GLUT_MIDDLE_BUTTON:
                colorR = 0.0f; colorG = 1.0f; colorB = 0.0f; // Green
                break;
            case GLUT_RIGHT_BUTTON:
                colorR = 0.0f; colorG = 0.0f; colorB = 1.0f; // Blue
                break;
        }
        glutPostRedisplay();
    }
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("Change Color by Mouse Clicks");
    glutDisplayFunc(display);
    glutMouseFunc(handleMouse);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutMouseFunc(handleMouse)"
    },
    {
        id: 5,
        title: "Change Color Gradually by Mouse Motion",
        content: `
<p>Implement gradual color changes based on mouse movement using FreeGLUT's mouse motion callback.</p>
<p><strong>Implementation Steps:</strong></p>
<ol>
    <li>Set up the display callback to draw a shape.</li>
    <li>Implement the mouse motion callback to track mouse movement.</li>
    <li>Adjust the color based on the mouse's x and y positions.</li>
</ol>
<pre><code>#include <GL/freeglut.h>

float colorR = 0.0f, colorG = 0.0f, colorB = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(colorR, colorG, colorB); // Dynamic color
    glBegin(GL_QUADS);
        glVertex2f(-0.5f, -0.5f);
        glVertex2f(0.5f, -0.5f);
        glVertex2f(0.5f, 0.5f);
        glVertex2f(-0.5f, 0.5f);
    glEnd();

    glFlush();
}

void handleMotion(int x, int y) {
    int windowWidth = glutGet(GLUT_WINDOW_WIDTH);
    int windowHeight = glutGet(GLUT_WINDOW_HEIGHT);

    colorR = (float)x / windowWidth;
    colorG = (float)y / windowHeight;
    colorB = 0.5f; // Fixed blue component

    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("Change Color Gradually by Mouse Motion");
    glutDisplayFunc(display);
    glutPassiveMotionFunc(handleMotion);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutPassiveMotionFunc(handleMotion)"
    },
    {
        id: 6,
        title: "Draw Shapes by Mouse Click",
        content: `
<p>Enable drawing shapes at the location of mouse clicks using FreeGLUT's mouse callback.</p>
<p><strong>Implementation Steps:</strong></p>
<ol>
    <li>Set up the display callback to draw all shapes.</li>
    <li>Implement the mouse callback to capture click positions.</li>
    <li>Store the positions and render shapes accordingly.</li>
</ol>
<pre><code>#include <GL/freeglut.h>
#include <vector>

struct Point {
    float x, y;
};

std::vector<Point> points;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.0f, 0.6f, 0.8f); // Cyan color
    glBegin(GL_POINTS);
        for(auto &p : points) {
            glVertex2f(p.x, p.y);
        }
    glEnd();

    glFlush();
}

void handleMouse(int button, int state, int x, int y) {
    if(state == GLUT_DOWN) {
        int windowWidth = glutGet(GLUT_WINDOW_WIDTH);
        int windowHeight = glutGet(GLUT_WINDOW_HEIGHT);

        float fx = (float)x / windowWidth * 2.0f - 1.0f;
        float fy = 1.0f - (float)y / windowHeight * 2.0f;

        points.push_back(Point{fx, fy});
        glutPostRedisplay();
    }
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("Draw Shapes by Mouse Click");
    glutDisplayFunc(display);
    glutMouseFunc(handleMouse);
    glutInitWindowSize(800, 600);
    glPointSize(5.0f);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutMouseFunc(handleMouse)"
    },
    // ... (Add tutorials 7-17 similarly)
    {
        id: 7,
        title: "3D Projection Examples",
        content: `
<p>Understanding 2D and 3D projections is crucial in OpenGL to render objects correctly on the screen.</p>
<p><strong>Types of Projections:</strong></p>
<ul>
    <li><strong>Orthographic Projection:</strong> Parallel projection without perspective.</li>
    <li><strong>Perspective Projection:</strong> Mimics the human eye with vanishing points.</li>
</ul>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    // Set up orthographic projection
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(-2.0, 2.0, -2.0, 2.0, -10.0, 10.0);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    // Draw a cube
    glutSolidCube(1.0f);

    glutSwapBuffers();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Orthographic Projection Example");
    glutDisplayFunc(display);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
<p>Switching to perspective projection:</p>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    // Set up perspective projection
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(45.0, 1.0, 1.0, 100.0);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    gluLookAt(3.0,3.0,3.0, 0.0,0.0,0.0, 0.0,1.0,0.0);

    // Draw a cube
    glutSolidCube(1.0f);

    glutSwapBuffers();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Perspective Projection Example");
    glutDisplayFunc(display);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "gluPerspective(45.0, 1.0, 1.0, 100.0)"
    },
    {
        id: 8,
        title: "Notes on popMatrix() and pushMatrix()",
        content: `
<p>Although FreeGLUT doesn't have &grave;popMatrix()&grave; and &grave;pushMatrix()&grave; functions like Processing, OpenGL provides similar functionality using matrix modes and stack operations.</p>
<p><strong>Matrix Stack Operations:</strong></p>
<ul>
    <li><strong>glPushMatrix():</strong> Saves the current matrix state.</li>
    <li><strong>glPopMatrix():</strong> Restores the last saved matrix state.</li>
</ul>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    // Draw first cube
    glPushMatrix();
    glTranslatef(-1.0f, 0.0f, -5.0f);
    glutSolidCube(1.0f);
    glPopMatrix();

    // Draw second cube
    glPushMatrix();
    glTranslatef(1.0f, 0.0f, -5.0f);
    glutSolidCube(1.0f);
    glPopMatrix();

    glutSwapBuffers();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("pushMatrix and popMatrix Example");
    glutDisplayFunc(display);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glPushMatrix()"
    },
    {
        id: 9,
        title: "Basic Transformations",
        content: `
<p>Transformations allow you to move, scale, and rotate objects in OpenGL.</p>
<p><strong>Types of Transformations:</strong></p>
<ul>
    <li><strong>Translation:</strong> Moving objects along the x, y, or z-axis.</li>
    <li><strong>Scaling:</strong> Increasing or decreasing the size of objects.</li>
    <li><strong>Rotation:</strong> Rotating objects around an axis.</li>
</ul>
<pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    // Translation
    glTranslatef(-1.5f, 0.0f, -7.0f);
    glColor3f(1.0f, 0.0f, 0.0f); // Red
    glutSolidCube(1.0f);

    // Scaling
    glLoadIdentity();
    glTranslatef(1.5f, 0.0f, -7.0f);
    glScalef(1.0f, 2.0f, 1.0f); // Scale Y-axis
    glColor3f(0.0f, 1.0f, 0.0f); // Green
    glutSolidCube(1.0f);

    // Rotation
    glLoadIdentity();
    glTranslatef(0.0f, 0.0f, -7.0f);
    glRotatef(45.0f, 1.0f, 1.0f, 0.0f); // Rotate around X and Y axes
    glColor3f(0.0f, 0.0f, 1.0f); // Blue
    glutSolidCube(1.0f);

    glutSwapBuffers();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Basic Transformations");
    glutDisplayFunc(display);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glTranslatef(-1.5f, 0.0f, -7.0f)"
    },
    {
        id: 10,
        title: "Translate Animation",
        content: `
<p>Create an animation where an object moves continuously along an axis using FreeGLUT's idle callback.</p>
<p><strong>Implementation Steps:</strong></p>
<ol>
    <li>Set up the display callback to draw the object.</li>
    <li>Implement the idle callback to update the object's position.</li>
    <li>Ensure the position resets to create a looping animation.</li>
</ol>
<pre><code>#include <GL/freeglut.h>

float posX = -2.0f;
float speed = 0.01f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glTranslatef(posX, 0.0f, -5.0f);
    glColor3f(0.8f, 0.2f, 0.2f); // Reddish color
    glutSolidSphere(0.5f, 20, 20);

    glutSwapBuffers();
}

void idle() {
    posX += speed;
    if(posX > 2.0f) posX = -2.0f; // Reset position
    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Translate Animation");
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutIdleFunc(idle)"
    },
    // ... (Add tutorials 11-17 similarly)
    {
        id: 18,
        title: "Basic Transformations",
        content: `
<p>Transformations allow you to manipulate objects in the 3D space. This tutorial covers the basics of translating, scaling, and rotating objects.</p>
<p><strong>Translation:</strong> Moving an object along the x, y, or z-axis.</p>
<p><strong>Scaling:</strong> Increasing or decreasing the size of an object.</p>
<p><strong>Rotation:</strong> Rotating an object around a specified axis.</p>
<pre><code>#include <GL/freeglut.h>

float angle = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    // Translate
    glTranslatef(-1.5f, 0.0f, -7.0f);
    glColor3f(1.0f, 0.0f, 0.0f); // Red
    glutSolidCube(1.0f);

    // Scale
    glLoadIdentity();
    glTranslatef(1.5f, 0.0f, -7.0f);
    glScalef(1.5f, 1.5f, 1.5f);
    glColor3f(0.0f, 1.0f, 0.0f); // Green
    glutSolidCube(1.0f);

    // Rotate
    glLoadIdentity();
    glTranslatef(0.0f, 0.0f, -7.0f);
    glRotatef(angle, 1.0f, 1.0f, 0.0f);
    glColor3f(0.0f, 0.0f, 1.0f); // Blue
    glutSolidCube(1.0f);

    glutSwapBuffers();
}

void idle() {
    angle += 0.1f;
    if(angle > 360.0f)
        angle -= 360.0f;
    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Basic Transformations");
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutIdleFunc(idle)"
    },
    {
        id: 19,
        title: "Translate Animation",
        content: `
<p>Animate an object by translating it back and forth along an axis.</p>
<p><strong>Implementation Steps:</strong></p>
<ol>
    <li>Initialize the object's position.</li>
    <li>Update the position in the idle callback to create motion.</li>
    <li>Reset the position when it reaches a boundary to create a loop.</li>
</ol>
<pre><code>#include <GL/freeglut.h>

float posX = -2.0f;
float speed = 0.02f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glTranslatef(posX, 0.0f, -5.0f);
    glColor3f(0.5f, 0.5f, 1.0f); // Light Blue
    glutSolidSphere(0.5f, 20, 20);

    glutSwapBuffers();
}

void idle() {
    posX += speed;
    if(posX > 2.0f || posX < -2.0f) {
        speed = -speed; // Reverse direction
    }
    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("Translate Animation");
    glutDisplayFunc(display);
    glutIdleFunc(idle);
    glEnable(GL_DEPTH_TEST);
    glutMainLoop();
    return 0;
}</code></pre>
`,
        expectedCode: "glutIdleFunc(idle)"
    },
    // Add more tutorials as needed up to id: 20
    // For brevity, only key tutorials are added here
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
        question: "Which function is used to specify geometric primitives in OpenGL?",
        options: {
            a: "glBegin()",
            b: "glVertex2f()",
            c: "glEnd()",
            d: "All of the above"
        },
        correct: "d"
    },
    {
        id: 3,
        tutorialId: 3,
        question: "What shape is created by combining a quad and a triangle in the 'Geometry Primitives House' example?",
        options: {
            a: "A pyramid",
            b: "A house",
            c: "A sphere",
            d: "A cylinder"
        },
        correct: "b"
    },
    {
        id: 4,
        tutorialId: 4,
        question: "Which mouse button changes the color to blue in the 'Change Color by Mouse Clicks' example?",
        options: {
            a: "Left Button",
            b: "Middle Button",
            c: "Right Button",
            d: "None of the above"
        },
        correct: "c"
    },
    {
        id: 5,
        tutorialId: 5,
        question: "What does the 'glutPassiveMotionFunc' function do in the 'Change Color Gradually by Mouse Motion' example?",
        options: {
            a: "Handles mouse clicks",
            b: "Handles keyboard input",
            c: "Handles mouse movement without button presses",
            d: "Handles window resizing"
        },
        correct: "c"
    },
    {
        id: 6,
        tutorialId: 6,
        question: "In the 'Draw Shapes by Mouse Click' example, what OpenGL primitive is used to draw the shapes?",
        options: {
            a: "GL_TRIANGLES",
            b: "GL_QUADS",
            c: "GL_POINTS",
            d: "GL_LINES"
        },
        correct: "c"
    },
    {
        id: 7,
        tutorialId: 7,
        question: "Which function is used to save the current matrix state in OpenGL?",
        options: {
            a: "glSaveMatrix()",
            b: "glPushMatrix()",
            c: "glStoreMatrix()",
            d: "glCopyMatrix()"
        },
        correct: "b"
    },
    {
        id: 8,
        tutorialId: 8,
        question: "What is the purpose of 'glPushMatrix()' and 'glPopMatrix()' in OpenGL?",
        options: {
            a: "To handle lighting",
            b: "To manage the matrix stack for transformations",
            c: "To load textures",
            d: "To manage buffers"
        },
        correct: "b"
    },
    {
        id: 9,
        tutorialId: 9,
        question: "Which transformation is not covered in the 'Basic Transformations' tutorial?",
        options: {
            a: "Translation",
            b: "Scaling",
            c: "Shearing",
            d: "Rotation"
        },
        correct: "c"
    },
    {
        id: 10,
        tutorialId: 10,
        question: "In the 'Translate Animation' example, what happens when the object reaches the boundary?",
        options: {
            a: "It disappears",
            b: "It changes color",
            c: "It reverses direction",
            d: "It stops moving"
        },
        correct: "c"
    },
    // Add more quizzes up to id: 20 following the same structure
    // For brevity, only 10 quizzes are added here
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

// Function to update progress
function updateProgress(type) {
    if(type === 'tutorial') {
        tutorialsCompleted = Math.min(tutorialsCompleted + 1, totalTutorials);
        updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    } else if(type === 'quiz') {
        quizzesCompleted = Math.min(quizzesCompleted + 1, totalQuizzes);
        updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);
    }
}

// Function to update progress bar
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

// Function to validate code (Basic Example)
function validateCode() {
    const code = window.codeMirrorInstance.getValue();
    // Example: Check if 'glutCreateWindow' is present
    if(code.includes('glutCreateWindow')) {
        alert('Your code looks good!');
    } else {
        alert('Please ensure you have included the glutCreateWindow function.');
    }
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

// Function to update progress
function updateProgress(type) {
    if(type === 'tutorial') {
        tutorialsCompleted = Math.min(tutorialsCompleted + 1, totalTutorials);
        updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    } else if(type === 'quiz') {
        quizzesCompleted = Math.min(quizzesCompleted + 1, totalQuizzes);
        updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);
    }
}

// Function to update progress bar
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

// Function to validate code (Basic Example)
function validateCode() {
    const code = window.codeMirrorInstance.getValue();
    // Example: Check if 'glutCreateWindow' is present
    if(code.includes('glutCreateWindow')) {
        alert('Your code looks good!');
    } else {
        alert('Please ensure you have included the glutCreateWindow function.');
    }
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
