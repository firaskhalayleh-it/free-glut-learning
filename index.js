        // بيانات الدروس والاختبارات
        const tutorialsData = [
            {
                id: 1,
                title: "مقدمة في FreeGLUT",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("نافذة FreeGLUT");
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>FreeGLUT هو بديل مفتوح المصدر لمكتبة OpenGL Utility Toolkit (GLUT). يوفر واجهة برمجة تطبيقات بسيطة لإنشاء النوافذ، ومعالجة المدخلات، وإدارة سياق OpenGL.</p>
            <p><strong>الميزات الرئيسية:</strong></p>
            <ul>
                <li>إنشاء وإدارة النوافذ</li>
                <li>معالجة المدخلات (لوحة المفاتيح، الماوس)</li>
                <li>دوال رد النداء للتصيير والأحداث</li>
            </ul>
        </div>
    </div>
            `,
                expectedCode: "glutCreateWindow"
            },
            {
                id: 2,
                title: "الأشكال الهندسية الأساسية",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glBegin(GL_TRIANGLES);
        glVertex2f(-0.5f, -0.5f); // النقطة 1
        glVertex2f(0.5f, -0.5f);  // النقطة 2
        glVertex2f(0.0f, 0.5f);   // النقطة 3
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("الأشكال الهندسية الأساسية");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>في OpenGL، الأشكال الهندسية الأساسية هي الأشكال الأساسية المستخدمة لبناء نماذج ثلاثية الأبعاد أكثر تعقيدًا. فهم هذه الأشكال ضروري لإنشاء تطبيقات رسومية.</p>
            <p><strong>الأشكال الشائعة:</strong></p>
            <ul>
                <li>نقاط</li>
                <li>خطوط</li>
                <li>مثلثات</li>
                <li>أرباعيات</li>
            </ul>
        </div>
    </div>
            `,
                expectedCode: "glBegin(GL_TRIANGLES)"
            },
            {
                id: 3,
                title: "الأشكال الهندسية: منزل",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // رسم قاعدة المنزل
    glBegin(GL_QUADS);
        glColor3f(0.7f, 0.7f, 0.7f); // لون رمادي
        glVertex2f(-0.5f, -0.5f); // أسفل اليسار
        glVertex2f(0.5f, -0.5f);  // أسفل اليمين
        glVertex2f(0.5f, 0.0f);   // أعلى اليمين
        glVertex2f(-0.5f, 0.0f);  // أعلى اليسار
    glEnd();

    // رسم سقف المنزل
    glBegin(GL_TRIANGLES);
        glColor3f(1.0f, 0.0f, 0.0f); // لون أحمر
        glVertex2f(-0.6f, 0.0f); // اليسار
        glVertex2f(0.6f, 0.0f);  // اليمين
        glVertex2f(0.0f, 0.5f);  // الأعلى
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("الأشكال الهندسية: منزل");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>لننشئ منزلًا بسيطًا باستخدام الأشكال الهندسية في OpenGL.</p>
            <p><strong>المكونات:</strong></p>
            <ul>
                <li>مربع للأساس</li>
                <li>مثلث للسقف</li>
            </ul>
        </div>
    </div>
            `,
                expectedCode: "glBegin(GL_QUADS)"
            },
            {
                id: 4,
                title: "تغيير اللون عند النقر بالماوس",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>

float colorR = 0.0f, colorG = 0.0f, colorB = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(colorR, colorG, colorB); // لون ديناميكي
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
                colorR = 1.0f; colorG = 0.0f; colorB = 0.0f; // أحمر
                break;
            case GLUT_MIDDLE_BUTTON:
                colorR = 0.0f; colorG = 1.0f; colorB = 0.0f; // أخضر
                break;
            case GLUT_RIGHT_BUTTON:
                colorR = 0.0f; colorG = 0.0f; colorB = 1.0f; // أزرق
                break;
        }
        glutPostRedisplay();
    }
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("تغيير اللون عند النقر بالماوس");
    glutDisplayFunc(display);
    glutMouseFunc(handleMouse);
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>تعلم كيفية تغيير لون الشكل بناءً على نقرات الماوس باستخدام معالجة المدخلات في FreeGLUT.</p>
            <p><strong>خطوات التنفيذ:</strong></p>
            <ol>
                <li>إعداد دالة العرض لرسم الشكل.</li>
                <li>تنفيذ دالة الماوس للكشف عن النقرات.</li>
                <li>تغيير اللون بناءً على زر الماوس المضغوط.</li>
            </ol>
        </div>
    </div>
            `,
                expectedCode: "glutMouseFunc(handleMouse)"
            },
            {
                id: 5,
                title: "تغيير اللون تدريجيًا بحركة الماوس",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>

float colorR = 0.0f, colorG = 0.0f, colorB = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(colorR, colorG, colorB); // لون ديناميكي
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
    colorB = 0.5f; // مكون أزرق ثابت

    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("تغيير اللون تدريجيًا بحركة الماوس");
    glutDisplayFunc(display);
    glutPassiveMotionFunc(handleMotion);
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>تنفيذ تغييرات تدريجية في اللون بناءً على حركة الماوس باستخدام دالة رد النداء لحركة الماوس في FreeGLUT.</p>
            <p><strong>خطوات التنفيذ:</strong></p>
            <ol>
                <li>إعداد دالة العرض لرسم الشكل.</li>
                <li>تنفيذ دالة حركة الماوس لتتبع حركة الماوس.</li>
                <li>تعديل اللون بناءً على مواقع x و y للماوس.</li>
            </ol>
        </div>
    </div>
            `,
                expectedCode: "glutPassiveMotionFunc(handleMotion)"
            },
            {
                id: 6,
                title: "رسم الأشكال عند نقر الماوس",
                content: `
    <div class="tutorial-content">
        <div class="tutorial-code">
            <pre><code>#include <GL/freeglut.h>
#include <vector>

struct Point {
    float x, y;
};

std::vector<Point> points;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.0f, 0.6f, 0.8f); // لون سماوي
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
    glutCreateWindow("رسم الأشكال عند نقر الماوس");
    glutDisplayFunc(display);
    glutMouseFunc(handleMouse);
    glutInitWindowSize(800, 600);
    glPointSize(5.0f);
    glutMainLoop();
    return 0;
}</code></pre>
        </div>
        <div class="tutorial-text">
            <p>تمكين رسم الأشكال في موقع نقرات الماوس باستخدام دالة رد النداء للماوس في FreeGLUT.</p>
            <p><strong>خطوات التنفيذ:</strong></p>
            <ol>
                <li>إعداد دالة العرض لرسم جميع الأشكال.</li>
                <li>تنفيذ دالة الماوس لالتقاط مواقع النقر.</li>
                <li>تخزين المواقع ورسم الأشكال وفقًا لذلك.</li>
            </ol>
        </div>
    </div>
            `,
                expectedCode: "glutMouseFunc(handleMouse)"
            },
            // يمكنك إضافة المزيد من الدروس حتى id: 20 هنا بنفس النمط
        ];

        const quizzesData = [
            {
                id: 1,
                tutorialId: 1,
                question: "ما هو الاستخدام الرئيسي لـ FreeGLUT؟",
                options: {
                    a: "معالجة عمليات الشبكة",
                    b: "إنشاء النوافذ ومعالجة المدخلات في تطبيقات OpenGL",
                    c: "إدارة قواعد البيانات",
                    d: "معالجة الصور"
                },
                correct: "b"
            },
            {
                id: 2,
                tutorialId: 2,
                question: "أي دالة تستخدم لتحديد الأشكال الهندسية في OpenGL؟",
                options: {
                    a: "glBegin()",
                    b: "glVertex2f()",
                    c: "glEnd()",
                    d: "جميع ما ذكر"
                },
                correct: "d"
            },
            {
                id: 3,
                tutorialId: 3,
                question: "ما هو الشكل الذي يتم إنشاؤه بدمج مربع ومثلث في مثال 'الأشكال الهندسية المنزل'؟",
                options: {
                    a: "هرم",
                    b: "منزل",
                    c: "كرة",
                    d: "أسطوانة"
                },
                correct: "b"
            },
            {
                id: 4,
                tutorialId: 4,
                question: "أي زر ماوس يغير اللون إلى الأزرق في مثال 'تغيير اللون عند النقر بالماوس'؟",
                options: {
                    a: "الزر الأيسر",
                    b: "الزر الأوسط",
                    c: "الزر الأيمن",
                    d: "لا شيء مما ذكر"
                },
                correct: "c"
            },
            {
                id: 5,
                tutorialId: 5,
                question: "ماذا تفعل دالة 'glutPassiveMotionFunc' في مثال 'تغيير اللون تدريجيًا بحركة الماوس'؟",
                options: {
                    a: "تعالج نقرات الماوس",
                    b: "تعالج إدخال لوحة المفاتيح",
                    c: "تعالج حركة الماوس بدون ضغط الأزرار",
                    d: "تعالج تغيير حجم النافذة"
                },
                correct: "c"
            },
            {
                id: 6,
                tutorialId: 6,
                question: "في مثال 'رسم الأشكال عند نقر الماوس'، أي شكل هندسي يستخدم لرسم الأشكال؟",
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
                question: "أي دالة تستخدم لحفظ حالة المصفوفة الحالية في OpenGL؟",
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
                question: "ما هو الغرض من 'glPushMatrix()' و 'glPopMatrix()' في OpenGL؟",
                options: {
                    a: "للتعامل مع الإضاءة",
                    b: "لإدارة مكدس المصفوفة للتحويلات",
                    c: "لتحميل الخامات",
                    d: "لإدارة المخازن"
                },
                correct: "b"
            },
            {
                id: 9,
                tutorialId: 9,
                question: "أي تحويل غير مغطى في درس 'التحويلات الأساسية'؟",
                options: {
                    a: "الترجمة",
                    b: "التوسيع",
                    c: "القص",
                    d: "الدوران"
                },
                correct: "c"
            },
            {
                id: 10,
                tutorialId: 10,
                question: "في مثال 'ترجمة الرسوم المتحركة'، ماذا يحدث عندما تصل الكائن إلى الحد الفاصل؟",
                options: {
                    a: "يختفي",
                    b: "يتغير لونه",
                    c: "يعكس الاتجاه",
                    d: "يتوقف عن الحركة"
                },
                correct: "c"
            },
            // يمكنك إضافة المزيد من الاختبارات حتى id: 20 هنا بنفس النمط
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
                    <button class="btn-submit" onclick="completeTutorial(${tutorial.id})">تحديد كمكتمل</button>
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
                    <h3>اختبار ${quiz.id}: ${tutorialTitle}</h3>
                    <p>${quiz.question}</p>
                    <ul class="options">
                        <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}a" value="a"><label for="quiz${quiz.id}a">أ) ${quiz.options.a}</label></li>
                        <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}b" value="b"><label for="quiz${quiz.id}b">ب) ${quiz.options.b}</label></li>
                        <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}c" value="c"><label for="quiz${quiz.id}c">ج) ${quiz.options.c}</label></li>
                        <li><input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}d" value="d"><label for="quiz${quiz.id}d">د) ${quiz.options.d}</label></li>
                    </ul>
                    <button class="btn-submit" onclick="submitQuiz(${quiz.id})">إرسال</button>
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
                    resultDiv.innerHTML = '<span style="color: green;">صحيح!</span>';
                    updateProgress('quiz');
                    // Prompt user to write code
                    promptCodeWriting(quiz.tutorialId);
                } else {
                    resultDiv.innerHTML = '<span style="color: red;">خطأ. حاول مرة أخرى.</span>';
                }
            } else {
                resultDiv.innerHTML = '<span style="color: red;">يرجى اختيار خيار.</span>';
            }
        }

        function promptCodeWriting(tutorialId) {
            // Notify user to write code
            alert("عمل رائع! الآن، اكتب الشيفرة المقابلة في محرر الشيفرة وقم بتحميلها.");
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
            output.innerHTML = '<span style="color: green;">تم تحميل الشيفرة بنجاح!</span>';
        }

        // Function to validate code (Basic Example)
        function validateCode() {
            const code = window.codeMirrorInstance.getValue();
            // Example: Check if 'glutCreateWindow' is present
            if(code.includes('glutCreateWindow')) {
                alert('شيفرتك تبدو جيدة!');
            } else {
                alert('يرجى التأكد من تضمين دالة glutCreateWindow.');
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

        // WebGL Visualization Initialization
        function initWebGL() {
            const canvas = document.getElementById('webgl-canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

            if (!gl) {
                console.error('WebGL غير مدعوم');
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
                    resultDiv.innerHTML = '<span style="color: green;">صحيح!</span>';
                    updateProgress('quiz');
                    // Prompt user to write code
                    promptCodeWriting(quiz.tutorialId);
                } else {
                    resultDiv.innerHTML = '<span style="color: red;">خطأ. حاول مرة أخرى.</span>';
                }
            } else {
                resultDiv.innerHTML = '<span style="color: red;">يرجى اختيار خيار.</span>';
            }
        }

        function promptCodeWriting(tutorialId) {
            // Notify user to write code
            alert("عمل رائع! الآن، اكتب الشيفرة المقابلة في محرر الشيفرة وقم بتحميلها.");
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
            output.innerHTML = '<span style="color: green;">تم تحميل الشيفرة بنجاح!</span>';
        }

        // Function to validate code (Basic Example)
        function validateCode() {
            const code = window.codeMirrorInstance.getValue();
            // Example: Check if 'glutCreateWindow' is present
            if(code.includes('glutCreateWindow')) {
                alert('شيفرتك تبدو جيدة!');
            } else {
                alert('يرجى التأكد من تضمين دالة glutCreateWindow.');
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

        // WebGL Visualization Initialization
        window.onload = function() {
            initWebGL();
        };
