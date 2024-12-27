// بيانات الدروس والاختبارات المصنفة حسب الموضوعات ومستويات الصعوبة
const tutorialsData = [
    // Tutorial 1
    {
        id: 1,
        title: "رسم خط بسيط باستخدام GLUT",
        category: "الرسم الأساسي",
        difficulty: "مبتدئ",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    
    void init () {
        glClearColor(1.0,1.0,1.0,0.0);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0.0,200.0,0.0,150.0);
    }
    
    void lineSegment() {
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.0,0.4,0.2);
        glBegin(GL_LINES);
            glVertex2i(180,100);
            glVertex2i(10,145);
        glEnd();
        glFlush();
    }
    
    int main(int argc, char **argv) {
        glutInit(&argc, argv);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutInitWindowPosition(50, 100);
        glutInitWindowSize(400, 300);
        glutCreateWindow("An Example OpenGL Program");
        init();
        glutDisplayFunc(lineSegment);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم خط بسيط باستخدام مكتبة GLUT في OpenGL. سنقوم بتهيئة النافذة، تحديد نظام الإحداثيات، ورسم خط بين نقطتين محددتين.</p>
                    <ul>
                        <li><strong>تهيئة الخلفية:</strong> نستخدم <code>glClearColor</code> لتحديد لون الخلفية.</li>
                        <li><strong>تحديد نظام الإحداثيات:</strong> نستخدم <code>gluOrtho2D</code> لتحديد نطاق الإحداثيات.</li>
                        <li><strong>رسم الخط:</strong> نستخدم <code>GL_LINES</code> مع <code>glBegin</code> و <code>glEnd</code> لرسم الخط.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_LINES)"
    },
    
    // Tutorial 2
    {
        id: 2,
        title: "رسم مربع متعدد الأشكال باستخدام GLUT",
        category: "الرسم الأساسي",
        difficulty: "مبتدئ",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    
    void display(){
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3d(0,1,0);
        glPointSize(10);
        glBegin(GL_POLYGON);
            glVertex2d(0,0);
            glVertex2d(100,0);
            glVertex2d(100,100);
            glVertex2d(0,100);
        glEnd();
    
        glColor3d(0,0,1);
        glBegin(GL_POLYGON);
            glVertex2d(0,0);
            glVertex2d(-10,0);
            glVertex2d(-10,-10);
            glVertex2d(0,-10);
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc,argv);
        glutInitWindowPosition(50,50);
        glutInitWindowSize(500,500);
        glutCreateWindow("Program 1 ");
        glClearColor(1,0,0,1);//background color
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم مربعات متعددة الألوان باستخدام GLUT في OpenGL. سنتعرف على كيفية تغيير لون الأشكال وتحديد مواقعها على الشاشة.</p>
                    <ul>
                        <li><strong>تحديد لون الأشكال:</strong> نستخدم <code>glColor3d</code> لتغيير لون الأشكال.</li>
                        <li><strong>رسم المربع:</strong> نستخدم <code>GL_POLYGON</code> مع نقاط الزوايا لرسم المربع.</li>
                        <li><strong>تغيير حجم النقاط:</strong> نستخدم <code>glPointSize</code> لتحديد حجم النقاط.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POLYGON)"
    },
    
    // Tutorial 3
    {
        id: 3,
        title: "التعامل مع أحداث لوحة المفاتيح والفأرة في GLUT",
        category: "معالجة الأحداث",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    #include<stdlib.h>
    #include<stdio.h>
    
    void display(){
        printf("You displayed the first window\\n");
    }
    
    void myKeyboard(unsigned char key, int x, int y){
        printf("You clicked keyboard button %c x= %d y= %d \\n", key,x,y);
    }
    
    void myReshape(int x, int y){
        printf("Window size has been changed x= %d, y=% d\\n",x,y);
    }
    
    void myMouse(int button, int state, int x, int y){
        printf("Mouse button clicked, button = %d, state= %d, x=%d, y=%d\\n", button, state,x,y);
    }
    
    int main( int argc, char **argv){
        glutInit(&argc,argv);
        glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB); //single buffer and RGB colors
        glClear(GL_COLOR_BUFFER_BIT);
        glutInitWindowSize(500,500);// for window size
        glutInitWindowPosition(50,50);// for window position
        glutCreateWindow("Welcome to this window");
        glutDisplayFunc(display);
        glutKeyboardFunc(myKeyboard);
        glutReshapeFunc(myReshape);
        glutMouseFunc(myMouse);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية التعامل مع أحداث لوحة المفاتيح والفأرة باستخدام مكتبة GLUT في OpenGL. سنقوم بتسجيل دوال ردود الفعل للأحداث المختلفة مثل الضغط على المفاتيح وتغيير حجم النافذة والنقر بالفأرة.</p>
                    <ul>
                        <li><strong>تسجيل دوال ردود الفعل:</strong> نستخدم <code>glutKeyboardFunc</code> و <code>glutMouseFunc</code> لتسجيل الدوال التي تتعامل مع أحداث لوحة المفاتيح والفأرة.</li>
                        <li><strong>معالجة تغيير حجم النافذة:</strong> نستخدم <code>glutReshapeFunc</code> للتعامل مع تغيير حجم النافذة.</li>
                        <li><strong>طباعة معلومات الأحداث:</strong> الدوال المسجلة تقوم بطباعة معلومات حول الأحداث التي تحدث.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutMouseFunc(myMouse)"
    },
    
    // Tutorial 4
    {
        id: 4,
        title: "رسم مربعات باستخدام التحويلات الهندسية",
        category: "التحولات الهندسية",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include <GL/glut.h>
    
    void init() {
        glClearColor(1,1,1,1); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(-400, 400, -400, 400); // نظام إحداثيات
    }
    
    void axis(){
        glBegin(GL_LINES);
            glVertex2d(0, 400);
            glVertex2d(0, -400);
            glVertex2d(-400, 0);
            glVertex2d(400, 0);
        glEnd();
    }
    
    void drawSquare(){
        glBegin(GL_POLYGON);
            glVertex2d(0, 0);
            glVertex2d(40, 0);
            glVertex2d(40, 40);
            glVertex2d(0, 40);
        glEnd();
    }
    
    void display() {
        glColor3f(0, 0,0); // لون المحاور
        axis(); // رسم المحاور
    
        glMatrixMode(GL_MODELVIEW);
        glLoadIdentity();
    
        glColor3f(0.5, 0.5, 0); // لون المربع الأصلي
        drawSquare();
    
        // تطبيق الترجمة
        glPushMatrix();
        glTranslated(100, 50, 0);
    
            // تطبيق التكبير
            glPushMatrix();
            glScaled(2, 2, 1);
    
                // تطبيق التدوير
                glPushMatrix();
                glRotated(90, 0, 0, 1);
    
                    glColor3f(1, 0, 0); // لون المربع المتحول
                    drawSquare();
    
                glPopMatrix();
            glPopMatrix();
    
        glColor3f(0, 1, 0); // لون المربع بعد الترجمة
        drawSquare();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("تحويلات هندسية");
    
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية تطبيق التحولات الهندسية مثل الترجمة (Translation)، التدوير (Rotation)، والتكبير (Scaling) على الأشكال في OpenGL باستخدام GLUT.</p>
                    <ul>
                        <li><strong>الترجمة:</strong> نستخدم <code>glTranslated</code> لتحريك الشكل إلى موقع جديد.</li>
                        <li><strong>التدوير:</strong> نستخدم <code>glRotated</code> لتدوير الشكل حول محور معين.</li>
                        <li><strong>التكبير:</strong> نستخدم <code>glScaled</code> لتكبير أو تصغير الشكل.</li>
                        <li><strong>الدوال المكدسة:</strong> نستخدم <code>glPushMatrix</code> و <code>glPopMatrix</code> للحفاظ على مصفوفة النموذج السابقة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glTranslated(100, 50, 0)"
    },
    
    // Tutorial 5
    {
        id: 5,
        title: "إنشاء حركة متحركة باستخدام GLUT Timer",
        category: "الأنيميشن",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include <GL/glut.h>
    
    int tx = 0; // إزاحة الحركة على المحور x
    int status = 1; // اتجاه الحركة
    
    void init() {
        glClearColor(1,1,1,0); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0, 640, 0, 480); // نظام إحداثيات
    }
    
    void drawSquare(){
        glBegin(GL_POLYGON);
            glVertex2d(0,0);
            glVertex2d(40,0);
            glVertex2d(40,40);
            glVertex2d(0,40);
        glEnd();
    }
    
    void display()
    {
        glColor3f(1, 0,0);
        glClear (GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_MODELVIEW);
        glLoadIdentity();
        glTranslated(tx,0,0);
        drawSquare();
        glFlush();
    }
    
    void update(int){
        if (tx > 600 || tx < 0)
            status = -status;
    
        tx += 5 * status;
        glutPostRedisplay();
        glutTimerFunc(100, update, 0);
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
    
        init();
        glutDisplayFunc(display);
        glutTimerFunc(0, update, 0);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية إنشاء حركة متحركة لمربع باستخدام دوال GLUT Timer. سنتحكم في إزاحة المربع على المحور x وعكس اتجاهه عند الوصول إلى حدود الشاشة.</p>
                    <ul>
                        <li><strong>الدوال الموقتة:</strong> نستخدم <code>glutTimerFunc</code> لتحديد دالة تُستدعى بعد فترة زمنية معينة.</li>
                        <li><strong>إزاحة الحركة:</strong> نحدث قيمة <code>tx</code> للتحكم في موقع المربع.</li>
                        <li><strong>عكس الاتجاه:</strong> نغير قيمة <code>status</code> لعكس اتجاه الحركة عند الوصول إلى الحدود.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutTimerFunc(100, update, 0)"
    },
    
    // Tutorial 6
    {
        id: 6,
        title: "رسم دوائر وأقواس باستخدام GLUT",
        category: "الرسم الأساسي",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    #include <cmath>
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,640,0,480); // نظام إحداثيات
    }
    
    void display(){
        glClear(GL_COLOR_BUFFER_BIT); // مسح الشاشة
    
        // رسم دائرة
        glColor3f(1, 0, 1); // لون الدائرة
        double theta, x, y;
        glBegin(GL_POINTS);
            for(theta =0; theta <=360; theta+=1){
                x = 60 * cos(3.14*theta/180) + 0;
                y = 60 * sin(3.14*theta/180) + 150;
                glVertex2f(x,y);
            }
        glEnd();
    
        // رسم دائرة مملوءة
        glBegin(GL_POLYGON);
            for(theta =0; theta <=360; theta+=1){
                x = 60 * cos(3.14*theta/180) + 150;
                y = 60 * sin(3.14*theta/180) + 150;
                glVertex2f(x,y);
            }
        glEnd();
    
        // رسم قوس
        glBegin(GL_POINTS);
            for(theta =0; theta <=90; theta+=1){
                x = 60 * cos(3.14*theta/180) + 300;
                y = 60 * sin(3.14*theta/180) + 150;
                glVertex2f(x,y);
            }
        glEnd();
    
        glFlush(); // تنفيذ الأوامر
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("رسم دوائر وأقواس");
    
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم دوائر، دوائر مملوءة، وأقواس باستخدام مكتبة GLUT في OpenGL. سنستخدم الدوال الرياضية لحساب نقاط الدائرة والقوس.</p>
                    <ul>
                        <li><strong>رسم الدائرة:</strong> نستخدم <code>GL_POINTS</code> لرسم نقاط الدائرة باستخدام دالة <code>glVertex2f</code>.</li>
                        <li><strong>رسم دائرة مملوءة:</strong> نستخدم <code>GL_POLYGON</code> لرسم دائرة مملوءة.</li>
                        <li><strong>رسم القوس:</strong> نستخدم <code>GL_POINTS</code> لرسم قوس بزاوية محددة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    },
    
    // Tutorial 7
    {
        id: 7,
        title: "رسم خطوط باستخدام مصفوفات الرؤوس",
        category: "الرسم الأساسي",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,500,0,500); // نظام إحداثيات
    }
    
    void display(){
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.7,0.7,0.7);
        glRectd(50,0, 200,150);
    
        glColor3f(0.7,0,0);
        glBegin(GL_TRIANGLES);
            glVertex2d(50,150);
            glVertex2d(125,200);
            glVertex2d(200,150);
        glEnd();
    
        glColor3f(0.0,0.0,0.7);
        glRectd(70,100, 100,130);
        glRectd(150,100, 180,130);
    
        glColor3f(0.8,0.5,0.2);
        glRectd(110,0, 150,60);
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(100,50);
        glutInitWindowSize(500,500);
        glutCreateWindow("simple example");
    
        glutDisplayFunc(display);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم خطوط وأشكال متعددة باستخدام مصفوفات الرؤوس في OpenGL. سنقوم برسم مستطيلات ومثلثات بألوان مختلفة لتوضيح كيفية استخدام الدوال الأساسية للرسم.</p>
                    <ul>
                        <li><strong>رسم المستطيلات:</strong> نستخدم <code>glRectd</code> لرسم مستطيلات بألوان مختلفة.</li>
                        <li><strong>رسم المثلثات:</strong> نستخدم <code>GL_TRIANGLES</code> مع نقاط الرؤوس لرسم مثلث.</li>
                        <li><strong>تغيير لون الأشكال:</strong> نستخدم <code>glColor3f</code> لتغيير لون الأشكال المرسومة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_TRIANGLES)"
    },
    
    // Tutorial 8
    {
        id: 8,
        title: "رسم المستطيلات باستخدام وظائف glRect",
        category: "الرسم الأساسي",
        difficulty: "مبتدئ",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,500,0,500); // نظام إحداثيات
    }
    
    void display(){
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(1,0,0);
    
        glRecti(100,100,300,400);
        //glRectd(10,10,100,100);
        //glRectf(10,10,100,100);
        // يمكننا استخدام نقطتين فقط بدلاً من ذلك
        GLfloat v1[]= {10,10}; // أو float
        GLfloat v2[]= {100,100}; // أو float
        glRectfv(v1,v2); // نقطتين كل واحدة لها إحداثيات x,y
        //glRectiv(v1,v2); // يجب أن تكون v1 و v2 int
        //glRectdv(v1,v2); // يجب أن تكون v1 و v2 double
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(50,50);
        glutInitWindowSize(500,500);
        glutCreateWindow("Output Primatives ");
        glutDisplayFunc(display);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم المستطيلات باستخدام دوال OpenGL المختلفة مثل <code>glRecti</code> و <code>glRectf</code> و <code>glRectd</code>. سنستعرض كيفية تحديد إحداثيات المستطيل باستخدام نقطتين.</p>
                    <ul>
                        <li><strong>رسم المستطيل باستخدام الأعداد الصحيحة:</strong> نستخدم <code>glRecti</code> لتحديد إحداثيات المستطيل باستخدام قيم صحيحة.</li>
                        <li><strong>رسم المستطيل باستخدام المصفوفات:</strong> نستخدم <code>glRectfv</code> لتحديد إحداثيات المستطيل باستخدام مصفوفات من النقاط.</li>
                        <li><strong>تغيير لون المستطيل:</strong> نستخدم <code>glColor3f</code> لتغيير لون المستطيل المرسوم.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glRectfv(v1,v2)"
    },
    
    // Tutorial 9
    {
        id: 9,
        title: "رسم مثلثات باستخدام GL_TRIANGLES",
        category: "الرسم الأساسي",
        difficulty: "مبتدئ",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,500,0,500); // نظام إحداثيات
    }
    
    void display(){
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(1,0,0);
    
        glBegin(GL_TRIANGLES);
            glVertex2i(100,100);
            glVertex2i(420,100);
            glVertex2i(220,400);
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(50,50);
        glutInitWindowSize(500,500);
        glutCreateWindow("Output Primatives ");
        glutDisplayFunc(display);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم مثلثات باستخدام OpenGL و GLUT. سنستخدم <code>GL_TRIANGLES</code> لتحديد رؤوس المثلثات وتلوينها بألوان مختلفة.</p>
                    <ul>
                        <li><strong>رسم المثلث:</strong> نستخدم <code>GL_TRIANGLES</code> مع ثلاث نقاط لرسم مثلث.</li>
                        <li><strong>تغيير لون المثلث:</strong> نستخدم <code>glColor3f</code> لتحديد لون المثلث.</li>
                        <li><strong>تحديد رؤوس المثلث:</strong> نستخدم <code>glVertex2i</code> لتحديد إحداثيات رؤوس المثلث.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_TRIANGLES)"
    },
    
    // Tutorial 10
    {
        id: 10,
        title: "رسم خطوط باستخدام أحداث الفأرة",
        category: "معالجة الأحداث",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    
    void myMouse(int button,int state,int x,int y){
        if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN){
            glColor3f(0.5,0.5,0);
            glutPostRedisplay();
        }
        if(button == GLUT_LEFT_BUTTON && state == GLUT_UP){
            glColor3f(0.,0.5,0.5);
            glutPostRedisplay();
        }
    }
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.5,0.6,0.7);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0, 500.0, 0, 500.0); // نظام إحداثيات
    }
    
    void display(){
        glRectd(100,100, 400, 300);
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(100,100);
        glutInitWindowSize(500,500);
        glutCreateWindow("Mouse Event Example");
        glutDisplayFunc(display);
        glutMouseFunc(myMouse);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية تغيير لون المستطيل بناءً على نقرات الفأرة. عند النقر بزر الفأرة الأيسر، سيتغير لون المستطيل حسب حالة الضغط.</p>
                    <ul>
                        <li><strong>التعامل مع نقرات الفأرة:</strong> نستخدم <code>glutMouseFunc</code> لتسجيل دالة رد الفعل لنقرات الفأرة.</li>
                        <li><strong>تغيير اللون:</strong> نغير لون المستطيل عند الضغط والإفلات باستخدام <code>glColor3f</code>.</li>
                        <li><strong>إعادة رسم الشاشة:</strong> نستخدم <code>glutPostRedisplay()</code> لإعادة رسم النافذة بعد تغيير اللون.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutMouseFunc(myMouse)"
    },
    
    // Tutorial 11
    {
        id: 11,
        title: "تغيير لون المستطيل عند النقر باستخدام المتغيرات الثابتة",
        category: "معالجة الأحداث",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    
    void myMouse(int button,int state,int x,int y){
        if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN){
            static float r = 0;
            static float g = 0;
            r += 0.1;
            g += 0.05;
    
            glColor3f(r, g, 0);
            glutPostRedisplay();
        }
    }
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.5,0.6,0.7);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0, 500.0, 0, 500.0); // نظام إحداثيات
    }
    
    void display(){
        glRectd(100,100, 400, 300);
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(100,100);
        glutInitWindowSize(500,500);
        glutCreateWindow("Mouse Event Example");
        glutDisplayFunc(display);
        glutMouseFunc(myMouse);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية تغيير لون المستطيل باستخدام متغيرات ثابتة (static variables) عند نقرات الفأرة. ستزداد قيم الألوان تدريجياً مع كل نقرة.</p>
                    <ul>
                        <li><strong>المتغيرات الثابتة:</strong> نستخدم <code>static</code> للحفاظ على قيم المتغيرات بين نقرات الفأرة.</li>
                        <li><strong>تحديث اللون:</strong> نزيد قيم الألوان تدريجياً لتغيير لون المستطيل عند كل نقرة.</li>
                        <li><strong>إعادة رسم الشاشة:</strong> نستخدم <code>glutPostRedisplay()</code> لإعادة رسم المستطيل باللون الجديد.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "static float r = 0;"
    },
    
    // Tutorial 12
    {
        id: 12,
        title: "رسم نقطة عند النقر بزر الفأرة",
        category: "معالجة الأحداث",
        difficulty: "مبتدئ",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    #include<iostream>
    using namespace std;
    
    void myMouse(int button,int state,int x,int y){
        if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN){
            glBegin(GL_POINTS);
                glVertex2f (x,480-y);
            glEnd();
            glutPostRedisplay();
        }
    }
    
    void init(){
        glClearColor(1,1,1,1); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0.0,640.0, 0.0, 480.0); // نظام إحداثيات
    }
    
    void display(){
        static float r = 0;
        static float g = 0;
        r += 0.1;
        g += 0.05;
    
        glColor3f(r, g, 0);
        glPointSize(15.0);
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowPosition(100,100);
        glutInitWindowSize(640, 480);
        glutCreateWindow("Mouse Event Example");
        glutDisplayFunc(display);
        glutMouseFunc(myMouse);
        init();
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم نقاط على الشاشة بناءً على نقرات الفأرة. عند النقر بزر الفأرة الأيسر، سيتم رسم نقطة في موقع النقر.</p>
                    <ul>
                        <li><strong>التعامل مع نقرات الفأرة:</strong> نستخدم <code>glutMouseFunc</code> لتسجيل دالة رد الفعل لنقرات الفأرة.</li>
                        <li><strong>رسم النقاط:</strong> نستخدم <code>GL_POINTS</code> مع <code>glVertex2f</code> لرسم النقاط في مواقع النقر.</li>
                        <li><strong>تغيير لون النقاط:</strong> نستخدم متغيرات ثابتة لتغيير لون النقاط مع كل نقرة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    },
    
    // Tutorial 13
    {
        id: 13,
        title: "رسم مربع بناءً على نقرات الفأرة",
        category: "معالجة الأحداث",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(1, 0, 0);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,600,0,400); // نظام إحداثيات
    }
    
    void mouseClick(int button, int state, int x, int y){
        if (button == 0 && state == GLUT_DOWN){
            static float r=0;
            static float g=0;
            r += 0.01;
            g += 0.05;
            glColor3f(r, g, 0.3);
            glutPostRedisplay();
        }
    }
    
    void keyboardClick (unsigned char key, int x, int y){
        if(key=='c' || key=='C'){
            static float r=0;
            static float g=0;
            r += 0.01;
            g += 0.05;
            glColor3f(r, g, 0.3);
            glutPostRedisplay();
        }
    }
    
    void display(){
        glRectd(50,50,90,90);
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(600, 400);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Mouse Click");
        init();
        glutDisplayFunc(display);
        glutMouseFunc(mouseClick);
        glutKeyboardFunc(keyboardClick);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم مربع بناءً على نقرات الفأرة أو الضغط على مفتاح معين. عند النقر بزر الفأرة الأيسر أو الضغط على مفتاح 'C'، سيتغير لون المربع.</p>
                    <ul>
                        <li><strong>التعامل مع نقرات الفأرة:</strong> نستخدم <code>glutMouseFunc</code> لتسجيل دالة رد الفعل لنقرات الفأرة.</li>
                        <li><strong>التعامل مع ضغطات المفاتيح:</strong> نستخدم <code>glutKeyboardFunc</code> لتسجيل دالة رد الفعل لضغطات المفاتيح.</li>
                        <li><strong>رسم المربع:</strong> نستخدم <code>glRectd</code> لرسم مربع بالإحداثيات المحددة.</li>
                        <li><strong>تغيير لون المربع:</strong> نستخدم متغيرات ثابتة لتغيير لون المربع عند كل حدث.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutMouseFunc(mouseClick)"
    },
    
    // Tutorial 14
    {
        id: 14,
        title: "رسم خط بين نقطتين بالنقر مرتين على الفأرة",
        category: "معالجة الأحداث",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    
    int initVertex=0;
    int xi,yi;
    
    void myMouse(int button,int state,int x,int y){
        if (button == GLUT_LEFT_BUTTON && state == GLUT_UP){
            switch(initVertex){
                case 0:
                    xi = x;
                    yi = 480 - y;
                    glPointSize(5);
                    glBegin(GL_POINTS);
                        glVertex2i(xi, yi);
                    glEnd();
                    initVertex = 1;
                    break;
                case 1:
                    glLineWidth(5.0);
                    glBegin(GL_LINES);
                        glVertex2i(xi, yi);
                        glVertex2i(x, 480 - y);
                    glEnd();
                    initVertex = 0;
                    break;
            }
            glFlush();
        }
    }
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0.0, 640.0, 0.0, 480.0); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1, 0, 1);
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Line Drawing");
        init();
        glutDisplayFunc(display);
        glutMouseFunc(myMouse);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم خط بين نقطتين بناءً على نقرات الفأرة. عند النقر مرتين بزر الفأرة الأيسر، سيتم رسم خط بين النقطتين المحددتين.</p>
                    <ul>
                        <li><strong>تتبع النقرات:</strong> نستخدم متغيرات لتتبع النقرات الأولى والثانية.</li>
                        <li><strong>رسم النقاط والخطوط:</strong> نستخدم <code>GL_POINTS</code> لرسم النقطة الأولى و <code>GL_LINES</code> لرسم الخط بين النقطتين.</li>
                        <li><strong>تغيير عرض الخط:</strong> نستخدم <code>glLineWidth</code> لتحديد عرض الخط.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_LINES)"
    },
    
    // Tutorial 15
    {
        id: 15,
        title: "رسم خطوط أثناء سحب الفأرة",
        category: "معالجة الأحداث",
        difficulty: "متوسط",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    
    int state_update;
    int x_update, y_update;
    int x_init, y_init;
    
    void mouseClick(int button, int state, int x_click, int y_click){
        if(state == GLUT_UP){
            glClear(GL_COLOR_BUFFER_BIT);
            glLineWidth(5);
            glBegin(GL_LINES);
                glVertex2i(x_init,480 - y_init);
                glVertex2i(x_update,480 - y_update);
            glEnd();
            glFlush();
        }
        x_init = x_click;
        y_init = y_click;
        x_update = x_click;
        y_update = y_click;
        state_update = state;
    }
    
    void mouseMotion(int x_motion, int y_motion){
        if(state_update == 0){
            glLineWidth(5);
            glBegin(GL_LINES);
                glVertex2i(x_update,480 - y_update);
                glVertex2i(x_motion,480 - y_motion);
            glEnd();
        }
        x_update = x_motion;
        y_update = y_motion;
        glFlush();
    }
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,640,0,480); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(0, 0, 1);
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Draw line from point");
        init();
        glutDisplayFunc(display);
        glutMouseFunc(mouseClick);
        glutMotionFunc(mouseMotion);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم خطوط أثناء سحب الفأرة. عند الضغط والسحب بزر الفأرة، سيتم رسم خط يتبع حركة الفأرة.</p>
                    <ul>
                        <li><strong>التعامل مع أحداث السحب:</strong> نستخدم <code>glutMotionFunc</code> لتسجيل دالة رد الفعل لحركة الفأرة أثناء السحب.</li>
                        <li><strong>رسم الخط:</strong> نستخدم <code>GL_LINES</code> لرسم الخط بين النقاط المتحركة.</li>
                        <li><strong>تحديث الإحداثيات:</strong> نحدث إحداثيات النقاط أثناء حركة الفأرة لرسم الخط المتحرك.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutMotionFunc(mouseMotion)"
    },
    
    // Tutorial 16
    {
        id: 16,
        title: "رسم خطوط باستخدام خوارزميات مختلفة (Analytical, DDA, Midpoint)",
        category: "الرسم المتقدم",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include <windows.h>
    #include<GL/glut.h>
    #include <cmath>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,640,0,480); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1,0,1);
        int x1,y1,x2,y2; float m; float c;
        // خط أفقي
        x1= 50; x2= 350; y1=200;
        glBegin(GL_POINTS);
            for (int x=x1; x<=x2; x++)
                glVertex2f(x,y1);
        glEnd();
        // خط عمودي
        x1= 200; y1=100; y2=300;
        glBegin(GL_POINTS);
            for (int y=y1;y<=y2; y++)
                glVertex2f(x1,y);
        glEnd();
        // رسم خط باستخدام الطريقة التحليلية
        x1=50; y1=100; x2=250; y2=400;
        m=(double)(y2-y1)/(x2-x1);
        c= y1 - m*x1;
    
        if (m < 1){
            float y;
            glBegin(GL_POINTS);
            for (int x =x1; x<=x2; x++){
                y = x*m + c;
                glVertex2f(x, round(y));
            }
            glEnd();
        }
        else if(m > 1){
            float x;
            glBegin(GL_POINTS);
            for(int y=y1; y<=y2; y++){
                x = (y - c)/m;
                glVertex2f(round(x), y);
            }
            glEnd();
        }
        // رسم خط باستخدام خوارزمية DDA
        if (m < 1){
            float y; // y جديد
            float y0=y1; // y القديم
            glBegin(GL_POINTS);
            for(int x=x1;x<=x2; x++){
                y = y0 + m;
                glVertex2f(x, round(y));
                y0 = y;
            }
            glEnd();
        }
        else if(m > 1){
            float x; // x جديد
            float x0=x1; // x القديم
            glBegin(GL_POINTS);
            for(int y=y1;y<=y2; y++){
                x = x0 + (1/m);
                glVertex2f(round(x), y);
                x0 = x;
            }
            glEnd();
        }
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم خطوط باستخدام خوارزميات مختلفة مثل الطريقة التحليلية، خوارزمية DDA، وخوارزمية Midpoint. سنتعرف على كيفية تنفيذ كل خوارزمية وتحليل مزاياها.</p>
                    <ul>
                        <li><strong>الطريقة التحليلية:</strong> استخدام معادلة الخط لرسم النقاط.</li>
                        <li><strong>خوارزمية DDA:</strong> استخدام حساب التغيرات الصغيرة لتحديد نقاط الخط.</li>
                        <li><strong>خوارزمية Midpoint:</strong> استخدام النقطة الوسطى لاتخاذ قرارات رسم النقاط.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    },
    
    // Tutorial 17
    {
        id: 17,
        title: "رسم دوائر وأقواس باستخدام خوارزميات مختلفة",
        category: "الرسم المتقدم",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    #include<cmath>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.3,0.3,0.3);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0.0, 640.0, 0.0, 480.0); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1,0,0);
        int Xc, Yc, r;
        double theta, x, y;
    
        // رسم دائرة داخل مربع
        Xc = 200; Yc = 300; r = 60;
        glBegin(GL_POINTS);
            for(theta = 0; theta <=360; theta+=1){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glBegin(GL_LINE_LOOP);
            glVertex2i(Xc - r, Yc - r);
            glVertex2i(Xc - r, Yc + r);
            glVertex2i(Xc + r, Yc + r);
            glVertex2i(Xc + r, Yc - r);
        glEnd();
    
        // رسم مربع داخل دائرة
        Xc = 400; Yc = 300; r = 60;
        glBegin(GL_POINTS);
            for(theta = 0; theta <=360; theta+=0.5){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glBegin(GL_LINE_LOOP);
            for(theta = 45; theta <=360; theta+=90){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        // رسم مربع داخل دائرة بزاوية مختلفة
        glBegin(GL_LINE_LOOP);
            for(theta = 90; theta <=360; theta+=90){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم دوائر وأقواس داخل مربعات وعكس ذلك باستخدام خوارزميات مختلفة. سنتعرف على كيفية دمج الأشكال الهندسية وتطبيق التوجيهات الهندسية لرسم أنماط متداخلة.</p>
                    <ul>
                        <li><strong>رسم دائرة داخل مربع:</strong> نستخدم <code>GL_POINTS</code> و <code>GL_LINE_LOOP</code> لرسم دائرة ومربع متداخل.</li>
                        <li><strong>رسم مربع داخل دائرة:</strong> نستخدم زوايا مختلفة لتدوير المربع داخل دائرة باستخدام <code>GL_LINE_LOOP</code>.</li>
                        <li><strong>رسم الأشكال بزاوية مختلفة:</strong> نستخدم زوايا متعددة لرسم أشكال متداخلة وزوايا مختلفة داخل الأشكال.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_LINE_LOOP)"
    },
    
    // Tutorial 18
    {
        id: 18,
        title: "تطبيق الأنيميشن على مربع باستخدام التحويلات الهندسية",
        category: "الأنيميشن",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    
    int tx=0;
    int status=1;
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0, 640, 0, 480); // نظام إحداثيات
    }
    
    void drawSquare(){
        glBegin(GL_POLYGON);
            glVertex2d(0,0);
            glVertex2d(40,0);
            glVertex2d(40,40);
            glVertex2d(0,40);
        glEnd();
    }
    
    void display(){
        glColor3f(1,0,0);
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_MODELVIEW);
        glLoadIdentity();
        glTranslated(tx,0,0);
        drawSquare();
        glFlush();
    }
    
    void update(int){
        if (tx > 600 || tx < 0)
            status = -status;
        tx += 5 * status;
        glutPostRedisplay();
        glutTimerFunc(100, update, 0);
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutTimerFunc(0, update, 0);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية تطبيق الأنيميشن على مربع باستخدام التحويلات الهندسية. سنتحكم في حركة المربع على المحور x وعكس اتجاهه عند الوصول إلى حدود النافذة.</p>
                    <ul>
                        <li><strong>استخدام <code>glutTimerFunc</code>:</strong> لتحديد دالة التحديث التي تتحكم في حركة المربع.</li>
                        <li><strong>تغيير موقع المربع:</strong> نستخدم <code>glTranslated</code> لتحريك المربع على المحور x.</li>
                        <li><strong>عكس اتجاه الحركة:</strong> نغير قيمة المتغير <code>status</code> لعكس اتجاه الحركة عند الوصول إلى حدود الشاشة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glutTimerFunc(100, update, 0)"
    },
    
    // Tutorial 19
    {
        id: 19,
        title: "رسم إهليلجي باستخدام OpenGL",
        category: "الرسم المتقدم",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    #include <cmath>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,640,0,480); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1,0,1);
        int Xc, Yc, r;
        double theta, x, y;
    
        // رسم دائرة داخل مربع
        Xc = 200; Yc = 300; r = 60;
        glBegin(GL_POINTS);
            for(theta =0; theta <=360; theta+=1){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glBegin(GL_LINE_LOOP);
            glVertex2i(Xc-r, Yc-r);
            glVertex2i(Xc-r, Yc+r);
            glVertex2i(Xc+r, Yc+r);
            glVertex2i(Xc+r, Yc-r);
        glEnd();
    
        // رسم مربع داخل دائرة
        Xc = 400; Yc = 300; r = 60;
        glBegin(GL_POINTS);
            for(theta =0; theta <=360; theta+=0.5){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glBegin(GL_LINE_LOOP);
            for(theta =45; theta <=360; theta+=90){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        // رسم مربع داخل دائرة بزاوية مختلفة
        glBegin(GL_LINE_LOOP);
            for(theta =90; theta <=360; theta+=90){
                x = r * cos(3.14*theta/180) + Xc;
                y = r * sin(3.14*theta/180) + Yc;
                glVertex2f(x,y);
            }
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم إهليلجات داخل مربعات وعكس ذلك باستخدام OpenGL. سنستخدم دوال رياضية لحساب نقاط الإهليلج ورسمها باستخدام <code>GL_POINTS</code> و <code>GL_LINE_LOOP</code>.</p>
                    <ul>
                        <li><strong>رسم الإهليلج:</strong> نستخدم الدوال الجيبية والتوافقية لحساب نقاط الإهليلج.</li>
                        <li><strong>رسم المربع:</strong> نستخدم <code>GL_LINE_LOOP</code> لرسم مربع حول الإهليلج.</li>
                        <li><strong>تكرار الأشكال:</strong> نكرر عملية الرسم لرسم مربعات داخل إهليلجات بزاويا مختلفة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    },
    
    // Tutorial 20
    {
        id: 20,
        title: "رسم دائرة باستخدام خوارزمية Midpoint",
        category: "الرسم المتقدم",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    #include<cmath>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glColor3f(0.3,0.3,0.3);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0.0, 640.0, 0.0, 480.0); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1,0,0);
        double theta, x, y;
    
        glBegin(GL_POINTS);
            for(theta =0; theta <=360; theta+=1){
                x = 60 * cos(3.14*theta/180) + 0;
                y = 60 * sin(3.14*theta/180) + 150;
                glVertex2f(x,y);
            }
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم دائرة باستخدام خوارزمية Midpoint. سنستخدم الحلقات لحساب نقاط الدائرة ورسمها باستخدام <code>GL_POINTS</code>.</p>
                    <ul>
                        <li><strong>حساب نقاط الدائرة:</strong> نستخدم الدوال الجيبية والتوافقية لحساب إحداثيات نقاط الدائرة.</li>
                        <li><strong>رسم الدائرة:</strong> نستخدم <code>GL_POINTS</code> لرسم كل نقطة على الدائرة.</li>
                        <li><strong>تنفيذ الخوارزمية:</strong> نستخدم خوارزمية Midpoint لضمان رسم دائرة دقيقة وسلسة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    },
    
    // Tutorial 21
    {
        id: 21,
        title: "رسم دائرة داخل مربع باستخدام التحويلات الهندسية",
        category: "التحولات الهندسية",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include<GL/glut.h>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(-400, 400, -400, 400); // نظام إحداثيات
    }
    
    void axis(){
        glBegin(GL_LINES);
            glVertex2d(0,400);
            glVertex2d(0,-400);
            glVertex2d(-400,0);
            glVertex2d(400,0);
        glEnd();
    }
    
    void drawSquare(){
        glBegin(GL_POLYGON);
            glVertex2d(0,0);
            glVertex2d(40,0);
            glVertex2d(40,40);
            glVertex2d(0,40);
        glEnd();
    }
    
    void display(){
        glColor3f(0, 0,0); // لون المحاور
        axis(); // رسم المحاور
        glMatrixMode(GL_MODELVIEW);
        glLoadIdentity();
        glColor3f(0.5, 0.5,0); // لون المربع الأصلي
        drawSquare();
        glPushMatrix();
        glTranslated(100,50,0);
            glPushMatrix();
            glScaled(2,2,1);
                glPushMatrix();
                glRotated(90,0,0,1);
                    glColor3f(1,0,0); // لون المربع المتحول
                    drawSquare();
                glPopMatrix();
            glPopMatrix();
        glColor3f(0,1,0); // لون المربع بعد الترجمة
        drawSquare();
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم دائرة داخل مربع واستخدام التحويلات الهندسية مثل الترجمة، التدوير، والتكبير. سنستخدم <code>GL_POLYGON</code> لرسم الأشكال وتطبيق التحويلات عليها.</p>
                    <ul>
                        <li><strong>رسم المحاور:</strong> نستخدم <code>GL_LINES</code> لرسم المحاور الأفقية والعمودية.</li>
                        <li><strong>رسم المربع:</strong> نستخدم <code>GL_POLYGON</code> لرسم مربع.</li>
                        <li><strong>تطبيق التحويلات:</strong> نستخدم <code>glTranslated</code> و <code>glScaled</code> و <code>glRotated</code> لتحريك، تكبير، وتدوير المربع.</li>
                        <li><strong>تغيير لون المربع:</strong> نستخدم <code>glColor3f</code> لتغيير لون المربع بعد تطبيق التحويلات.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glTranslated(100,50,0)"
    },
    
    // Tutorial 22
    {
        id: 22,
        title: "رسم دائرة باستخدام الدالة Midpoint",
        category: "الرسم المتقدم",
        difficulty: "متقدم",
        content: `
            <div class="tutorial-content">
                <div class="tutorial-code">
                    <pre><code class="language-cpp">
    #include<windows.h>
    #include <GL/glut.h>
    #include<cmath>
    
    void init(){
        glClearColor(1,1,1,0); // خلفية بيضاء
        glClear(GL_COLOR_BUFFER_BIT);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(0,640,0,480); // نظام إحداثيات
    }
    
    void display(){
        glColor3f(1,0,1);
        double theta, x, y;
    
        glBegin(GL_POINTS);
            for(theta =0; theta <=360; theta+=1){
                x = 60 * cos(3.14*theta/180) + 0;
                y = 60 * sin(3.14*theta/180) + 150;
                glVertex2f(x,y);
            }
        glEnd();
    
        glFlush();
    }
    
    int main(int argc, char** argv){
        glutInit(&argc, argv);
        glutInitWindowSize(640, 480);
        glutInitWindowPosition(100, 100);
        glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
        glutCreateWindow("Template");
        init();
        glutDisplayFunc(display);
        glutMainLoop();
    }
                    </code></pre>
                </div>
                <div class="tutorial-text">
                    <p>في هذا الدرس، سنتعلم كيفية رسم دائرة باستخدام خوارزمية Midpoint. سنستخدم الحلقات لحساب نقاط الدائرة ورسمها باستخدام <code>GL_POINTS</code>.</p>
                    <ul>
                        <li><strong>حساب نقاط الدائرة:</strong> نستخدم الدوال الجيبية والتوافقية لحساب إحداثيات نقاط الدائرة.</li>
                        <li><strong>رسم الدائرة:</strong> نستخدم <code>GL_POINTS</code> لرسم كل نقطة على الدائرة.</li>
                        <li><strong>تنفيذ خوارزمية Midpoint:</strong> نستخدم خوارزمية Midpoint لضمان رسم دائرة دقيقة وسلسة.</li>
                    </ul>
                </div>
            </div>
        `,
        expectedCode: "glBegin(GL_POINTS)"
    }
];


// بيانات الاختبارات المصنفة حسب الدروس
const quizzesData = [
    // Quiz for Tutorial 1
    {
        id: 1,
        tutorialId: 1,
        question: "ما الدالة المستخدمة لتحديد لون الخلفية في OpenGL؟",
        options: {
            a: "glClear",
            b: "glClearColor",
            c: "glColor3f",
            d: "glBegin"
        },
        correct: "b"
    },
    {
        id: 2,
        tutorialId: 1,
        question: "أي نوع من البدائل يُستخدم لرسم خط مستقيم في OpenGL؟",
        options: {
            a: "GL_LINES",
            b: "GL_LINE_STRIP",
            c: "GL_LINE_LOOP",
            d: "GL_POLYGON"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 2
    {
        id: 3,
        tutorialId: 2,
        question: "ما الدالة المستخدمة لبدء رسم مضلع في OpenGL؟",
        options: {
            a: "glBegin(GL_POLYGON)",
            b: "glStart(GL_POLYGON)",
            c: "glDraw(GL_POLYGON)",
            d: "glPolygonBegin()"
        },
        correct: "a"
    },
    {
        id: 4,
        tutorialId: 2,
        question: "كيف يمكنك تحديد رأس المربع باستخدام قيم صحيحة؟",
        options: {
            a: "glVertex2f(100, 100)",
            b: "glVertex2d(100, 100)",
            c: "glVertex2i(100, 100)",
            d: "glVertex2s(100, 100)"
        },
        correct: "c"
    },
    
    // Quiz for Tutorial 3
    {
        id: 5,
        tutorialId: 3,
        question: "ما الدالة المستخدمة لتسجيل رد الفعل لضغطات المفاتيح في GLUT؟",
        options: {
            a: "glutKeyboardFunc",
            b: "glutKeyPressFunc",
            c: "glutKeyFunc",
            d: "glutKeyboardPress"
        },
        correct: "a"
    },
    {
        id: 6,
        tutorialId: 3,
        question: "ما وظيفة <code>glutMainLoop()</code> في برنامج GLUT؟",
        options: {
            a: "تهيئة مكتبة GLUT",
            b: "تسجيل دوال رد الفعل",
            c: "الدخول إلى حلقة معالجة الأحداث",
            d: "إنشاء نافذة العرض"
        },
        correct: "c"
    },
    
    // Quiz for Tutorial 4
    {
        id: 7,
        tutorialId: 4,
        question: "أي بديل يُستخدم لرسم نقاط فردية في OpenGL؟",
        options: {
            a: "GL_POINTS",
            b: "GL_LINES",
            c: "GL_TRIANGLES",
            d: "GL_POLYGON"
        },
        correct: "a"
    },
    {
        id: 8,
        tutorialId: 4,
        question: "كيف تحدد حجم النقاط في OpenGL؟",
        options: {
            a: "glPointScale()",
            b: "glPointDimension()",
            c: "glPointSize()",
            d: "glPointThickness()"
        },
        correct: "c"
    },
    
    // Quiz for Tutorial 5
    {
        id: 9,
        tutorialId: 5,
        question: "أي دالة تُستخدم لترجمة الأشكال في OpenGL؟",
        options: {
            a: "glRotated()",
            b: "glTranslated()",
            c: "glScaled()",
            d: "glTranslated() و glScaled()"
        },
        correct: "b"
    },
    {
        id: 10,
        tutorialId: 5,
        question: "كيف تقوم بتدوير الشكل حول المحور Z؟",
        options: {
            a: "glRotated(angle, 1, 0, 0)",
            b: "glRotated(angle, 0, 1, 0)",
            c: "glRotated(angle, 0, 0, 1)",
            d: "glRotate(angle, 0, 0, 1)"
        },
        correct: "c"
    },
    
    // Quiz for Tutorial 6
    {
        id: 11,
        tutorialId: 6,
        question: "أي دالة تُستخدم لتحديد دالة رد الفعل للمؤقت في GLUT؟",
        options: {
            a: "glutTimerFunc",
            b: "glutSetTimer",
            c: "glutStartTimer",
            d: "glutRegisterTimer"
        },
        correct: "a"
    },
    {
        id: 12,
        tutorialId: 6,
        question: "ما هي وظيفة <code>glutTimerFunc</code> في الإنيميشن؟",
        options: {
            a: "تحديد معدل الإطارات",
            b: "جدولة تحديثات دورية",
            c: "التعامل مع إدخال المستخدم",
            d: "رسم كل إطار"
        },
        correct: "b"
    },
    
    // Quiz for Tutorial 7
    {
        id: 13,
        tutorialId: 7,
        question: "أي بديل يُستخدم لرسم نقاط فردية في OpenGL؟",
        options: {
            a: "GL_POINTS",
            b: "GL_LINES",
            c: "GL_TRIANGLES",
            d: "GL_POLYGON"
        },
        correct: "a"
    },
    {
        id: 14,
        tutorialId: 7,
        question: "كيف تحدد حجم النقاط في OpenGL؟",
        options: {
            a: "glPointScale()",
            b: "glPointDimension()",
            c: "glPointSize()",
            d: "glPointThickness()"
        },
        correct: "c"
    },
    
    // Quiz for Tutorial 8
    {
        id: 15,
        tutorialId: 8,
        question: "أي دالة تُستخدم لبدء رسم مضلع في OpenGL؟",
        options: {
            a: "glBegin(GL_POLYGON)",
            b: "glStart(GL_POLYGON)",
            c: "glDraw(GL_POLYGON)",
            d: "glPolygonBegin()"
        },
        correct: "a"
    },
    {
        id: 16,
        tutorialId: 8,
        question: "كيف يمكنك رسم مستطيل باستخدام مصفوفات من النقاط؟",
        options: {
            a: "glRectfv(v1, v2)",
            b: "glRectiv(v1, v2)",
            c: "glRectdv(v1, v2)",
            d: "جميع ما ذكر"
        },
        correct: "d"
    },
    
    // Quiz for Tutorial 9
    {
        id: 17,
        tutorialId: 9,
        question: "أي بديل يُستخدم لرسم مثلثات في OpenGL؟",
        options: {
            a: "GL_POINTS",
            b: "GL_LINES",
            c: "GL_TRIANGLES",
            d: "GL_POLYGON"
        },
        correct: "c"
    },
    {
        id: 18,
        tutorialId: 9,
        question: "ما الدالة المستخدمة لإنهاء رسم المثلث في OpenGL؟",
        options: {
            a: "glEnd()",
            b: "glFinish()",
            c: "glComplete()",
            d: "glStop()"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 10
    {
        id: 19,
        tutorialId: 10,
        question: "أي دالة تُستخدم لتسجيل دالة رد الفعل لنقرات الفأرة في GLUT؟",
        options: {
            a: "glutMouseFunc",
            b: "glutClickFunc",
            c: "glutButtonFunc",
            d: "glutMouseClickFunc"
        },
        correct: "a"
    },
    {
        id: 20,
        tutorialId: 10,
        question: "ما هو تأثير <code>glutPostRedisplay()</code> بعد تغيير اللون؟",
        options: {
            a: "تغيير لون الخلفية",
            b: "إعادة رسم النافذة",
            c: "إغلاق النافذة",
            d: "تحديث دالة رد الفعل"
        },
        correct: "b"
    },
    
    // Quiz for Tutorial 11
    {
        id: 21,
        tutorialId: 11,
        question: "ما هي وظيفة المتغيرات الثابتة (static variables) في تغيير لون الأشكال؟",
        options: {
            a: "تخزين اللون الأولي فقط",
            b: "تخزين القيم بين نقرات الفأرة",
            c: "تغيير لون الخلفية",
            d: "عدم استخدامها"
        },
        correct: "b"
    },
    {
        id: 22,
        tutorialId: 11,
        question: "كيف يتم تحديث لون المربع بعد كل نقرة؟",
        options: {
            a: "بزيادة قيم r و g",
            b: "بخفض قيم r و g",
            c: "بإعادة تعيين قيم r و g",
            d: "لا يتغير"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 12
    {
        id: 23,
        tutorialId: 12,
        question: "أي دالة تُستخدم لرسم نقاط فردية في OpenGL؟",
        options: {
            a: "GL_POINTS",
            b: "GL_LINES",
            c: "GL_TRIANGLES",
            d: "GL_POLYGON"
        },
        correct: "a"
    },
    {
        id: 24,
        tutorialId: 12,
        question: "كيف يمكنك رسم مستطيل باستخدام نقطتين في OpenGL؟",
        options: {
            a: "glRectfv(v1, v2)",
            b: "glRectiv(v1, v2)",
            c: "glRectdv(v1, v2)",
            d: "جميع ما ذكر"
        },
        correct: "d"
    },
    
    // Quiz for Tutorial 13
    {
        id: 25,
        tutorialId: 13,
        question: "أي دالة تُستخدم لبدء رسم خط في OpenGL؟",
        options: {
            a: "glBegin(GL_LINES)",
            b: "glStart(GL_LINES)",
            c: "glDraw(GL_LINES)",
            d: "glLineBegin()"
        },
        correct: "a"
    },
    {
        id: 26,
        tutorialId: 13,
        question: "ما الدالة المستخدمة لإنهاء رسم الخط في OpenGL؟",
        options: {
            a: "glEnd()",
            b: "glFinish()",
            c: "glComplete()",
            d: "glStop()"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 14
    {
        id: 27,
        tutorialId: 14,
        question: "أي دالة تُستخدم لتسجيل رد الفعل لحركة الفأرة أثناء السحب في GLUT؟",
        options: {
            a: "glutMotionFunc",
            b: "glutPassiveMotionFunc",
            c: "glutMouseDragFunc",
            d: "glutDragFunc"
        },
        correct: "a"
    },
    {
        id: 28,
        tutorialId: 14,
        question: "ما تأثير <code>glutPostRedisplay()</code> بعد تحديث إحداثيات الخط؟",
        options: {
            a: "تغيير لون الخط",
            b: "إعادة رسم النافذة",
            c: "إغلاق النافذة",
            d: "تحديث دالة رد الفعل"
        },
        correct: "b"
    },
    
    // Quiz for Tutorial 15
    {
        id: 29,
        tutorialId: 15,
        question: "أي خوارزمية تُستخدم لتحديد النقاط بين نقطتين بشكل تدريجي؟",
        options: {
            a: "الطريقة التحليلية",
            b: "خوارزمية DDA",
            c: "خوارزمية Midpoint",
            d: "Bresenham's Algorithm"
        },
        correct: "b"
    },
    {
        id: 30,
        tutorialId: 15,
        question: "ما هي الميزة الرئيسية لخوارزمية Midpoint مقارنة بالطريقة التحليلية؟",
        options: {
            a: "البساطة",
            b: "الكفاءة واستخدام العمليات الصحيحة",
            c: "قدرتها على التعامل مع الخطوط العمودية",
            d: "لا توجد ميزة"
        },
        correct: "b"
    },
    
    // Quiz for Tutorial 16
    {
        id: 31,
        tutorialId: 16,
        question: "ما الهدف الأساسي لخوارزمية Midpoint في رسم الدوائر؟",
        options: {
            a: "حساب إحداثيات نقاط الدائرة بدقة",
            b: "رسم دوائر مملوءة",
            c: "تطبيق تدرجات الألوان",
            d: "رسم خطوط مائلة"
        },
        correct: "a"
    },
    {
        id: 32,
        tutorialId: 16,
        question: "ما المتغير الذي يحدد ما إذا كان يجب تقليل إحداثيات y في خوارزمية Midpoint؟",
        options: {
            a: "theta",
            b: "x",
            c: "y",
            d: "F"
        },
        correct: "d"
    },
    
    // Quiz for Tutorial 17
    {
        id: 33,
        tutorialId: 17,
        question: "أي ميزة في OpenGL تتيح تعبئة المضلع بنقوش؟",
        options: {
            a: "Texture Mapping",
            b: "Polygon Stippling",
            c: "Shading",
            d: "Lighting"
        },
        correct: "b"
    },
    {
        id: 34,
        tutorialId: 17,
        question: "كيف تقوم بتعطيل تعبئة المضلع بنقوش بعد تطبيق النمط؟",
        options: {
            a: "glDisable(GL_POLYGON_STIPPLE)",
            b: "glDisableStipple()",
            c: "glPolygonStipple(0)",
            d: "glClear(GL_POLYGON_STIPPLE)"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 18
    {
        id: 35,
        tutorialId: 18,
        question: "ما وظيفة استخدام <code>glPushMatrix()</code> و <code>glPopMatrix()</code> في التحويلات الهندسية؟",
        options: {
            a: "تطبيق التحويلات بشكل عالمي",
            b: "السماح بالتحويلات الهرمية",
            c: "إعادة تعيين مصفوفة التحويل",
            d: "تكرار المصفوفة الحالية"
        },
        correct: "b"
    },
    {
        id: 36,
        tutorialId: 18,
        question: "بأي ترتيب يتم تطبيق التحويلات عند استخدام <code>glPushMatrix()</code> و <code>glPopMatrix()</code> بشكل متداخل؟",
        options: {
            a: "من الأبعد إلى الأقرب",
            b: "من الأقرب إلى الأبعد",
            c: "تُطبق بشكل متزامن",
            d: "الترتيب غير مهم"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 19
    {
        id: 37,
        tutorialId: 19,
        question: "أي دالة في GLUT ضرورية لإنشاء الإنيميشن عن طريق تحديث مواقع الأشكال بمرور الوقت؟",
        options: {
            a: "glutDisplayFunc",
            b: "glutTimerFunc",
            c: "glutIdleFunc",
            d: "جميع ما ذكر"
        },
        correct: "d"
    },
    {
        id: 38,
        tutorialId: 19,
        question: "كيف تُساهم <code>glutTimerFunc</code> في الإنيميشن في OpenGL؟",
        options: {
            a: "تحديد معدل الإطارات",
            b: "جدولة تحديثات دورية",
            c: "التعامل مع إدخال المستخدم",
            d: "رسم كل إطار"
        },
        correct: "b"
    },
    
    // Quiz for Tutorial 20
    {
        id: 39,
        tutorialId: 20,
        question: "كيف تحقق شكلًا إهليلجيًا باستخدام تقنيات رسم الدوائر؟",
        options: {
            a: "بزيادة نصف القطر",
            b: "بتغيير عوامل التكبير في اتجاه x و y",
            c: "بتطبيق تدرجات الألوان",
            d: "باستخدام <code>GL_TRIANGLES</code>"
        },
        correct: "b"
    },
    {
        id: 40,
        tutorialId: 20,
        question: "أي دوال رياضية تُستخدم لحساب نقاط الإهليلج؟",
        options: {
            a: "sin و cos",
            b: "tan و cot",
            c: "sec و csc",
            d: "sinh و cosh"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 21
    {
        id: 41,
        tutorialId: 21,
        question: "ما الدالة المستخدمة لتحديد منطقة العرض في نافذة OpenGL؟",
        options: {
            a: "glViewport(x, y, width, height)",
            b: "glSetViewport(x, y, width, height)",
            c: "glDefineViewport(x, y, width, height)",
            d: "glViewportRegion(x, y, width, height)"
        },
        correct: "a"
    },
    {
        id: 42,
        tutorialId: 21,
        question: "كيف يمكنك رسم محتوى مختلف في مناطق عرض منفصلة ضمن نفس النافذة؟",
        options: {
            a: "بإعادة استدعاء <code>glViewport</code> قبل كل عملية رسم",
            b: "بإنشاء نوافذ متعددة",
            c: "باستخدام قوائم العرض المختلفة",
            d: "بالتبديل بين مصفوفات الإسقاط"
        },
        correct: "a"
    },
    
    // Quiz for Tutorial 22
    {
        id: 43,
        tutorialId: 22,
        question: "ما الهدف الرئيسي من خوارزمية Midpoint في رسم الدوائر؟",
        options: {
            a: "حساب الإحداثيات الدقيقة باستخدام عمليات عشرية",
            b: "استخدام العمليات الصحيحة لزيادة الكفاءة",
            c: "رسم دوائر مملوءة",
            d: "تطبيق تدرجات الألوان"
        },
        correct: "b"
    },
    {
        id: 44,
        tutorialId: 22,
        question: "ما المتغير الذي يحدد ما إذا كان يجب تقليل إحداثيات y في خوارزمية Midpoint؟",
        options: {
            a: "theta",
            b: "x",
            c: "y",
            d: "F"
        },
        correct: "d"
    }
];

/*-------------------------------------------------------------------------------
  توليد الدروس والاختبارات
-------------------------------------------------------------------------------*/
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
            <ul class="quiz-options">
                <li class="quiz-option">
                    <input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}a" value="a">
                    <label for="quiz${quiz.id}a">أ) ${quiz.options.a}</label>
                </li>
                <li class="quiz-option">
                    <input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}b" value="b">
                    <label for="quiz${quiz.id}b">ب) ${quiz.options.b}</label>
                </li>
                <li class="quiz-option">
                    <input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}c" value="c">
                    <label for="quiz${quiz.id}c">ج) ${quiz.options.c}</label>
                </li>
                <li class="quiz-option">
                    <input type="radio" name="quiz${quiz.id}" id="quiz${quiz.id}d" value="d">
                    <label for="quiz${quiz.id}d">د) ${quiz.options.d}</label>
                </li>
            </ul>
            <button class="btn-submit" onclick="submitQuiz(${quiz.id})">إرسال</button>
            <div class="result" id="result-quiz${quiz.id}"></div>
        `;
        quizzesSection.appendChild(quizDiv);
    });
}

/*-------------------------------------------------------------------------------
  إكمال الدروس والاختبارات
-------------------------------------------------------------------------------*/
function completeTutorial(tutorialId) {
    const tutorialDiv = document.querySelector(`.tutorial[data-tutorial-id="${tutorialId}"]`);
    tutorialDiv.style.display = 'none';
    updateProgress('tutorial');
}

function submitQuiz(quizId) {
    const quiz = quizzesData.find(q => q.id === quizId);
    const selectedOption = document.querySelector(`.quiz[data-quiz-id="${quizId}"] input[type="radio"]:checked`);
    const resultDiv = document.getElementById(`result-quiz${quizId}`);

    if (selectedOption) {
        if (selectedOption.value === quiz.correct) {
            resultDiv.innerHTML = '<span style="color: green;">صحيح!</span>';
            updateProgress('quiz');
            // يمكن إضافة وظيفة لتحفيز الطالب بعد الإجابة الصحيحة
        } else {
            resultDiv.innerHTML = '<span style="color: red;">خطأ. حاول مرة أخرى.</span>';
        }
    } else {
        resultDiv.innerHTML = '<span style="color: red;">يرجى اختيار خيار.</span>';
    }
}

/*-------------------------------------------------------------------------------
  تتبع التقدم في الدروس والاختبارات
-------------------------------------------------------------------------------*/
let tutorialsCompleted = 0;
let quizzesCompleted = 0;
const totalTutorials = tutorialsData.length;
const totalQuizzes = quizzesData.length;

function updateProgress(type) {
    if (type === 'tutorial') {
        tutorialsCompleted = Math.min(tutorialsCompleted + 1, totalTutorials);
        updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    } else if (type === 'quiz') {
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

/*-------------------------------------------------------------------------------
  تشغيل التوليد وتهيئة الصفحات بعد التحميل
-------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    // توليد الدروس والاختبارات
    generateTutorials();
    generateQuizzes();

    // تهيئة أشرطة التقدم
    updateProgressBar('tutorial-progress', tutorialsCompleted, totalTutorials);
    updateProgressBar('quiz-progress', quizzesCompleted, totalQuizzes);
});

/*-------------------------------------------------------------------------------
  وظائف إضافية (اختيارية): تحميل الشيفرة، التحقق من الشيفرة، إلخ
-------------------------------------------------------------------------------*/
function downloadCode() {
    if (!window.codeMirrorInstance) return;
    const code = window.codeMirrorInstance.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.cpp';
    a.click();
    URL.revokeObjectURL(url);

    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = '<span style="color: green;">تم تحميل الشيفرة بنجاح!</span>';
    }
}

function validateCode() {
    if (!window.codeMirrorInstance) return;
    const code = window.codeMirrorInstance.getValue();

    if (code.includes('glutCreateWindow')) {
        alert('شيفرتك تبدو جيدة!');
    } else {
        alert('يرجى التأكد من تضمين دالة glutCreateWindow.');
    }
}

/*-------------------------------------------------------------------------------
  وظائف التنقل في الأجهزة المحمولة
-------------------------------------------------------------------------------*/
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/*-------------------------------------------------------------------------------
  التمرير السلس للأقسام
-------------------------------------------------------------------------------*/
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    }
}
