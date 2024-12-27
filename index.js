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
    expectedCode: "glutCreateWindow",
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
    expectedCode: "glBegin(GL_TRIANGLES)",
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
    expectedCode: "glBegin(GL_QUADS)",
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
    expectedCode: "glutMouseFunc(handleMouse)",
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
    expectedCode: "glutPassiveMotionFunc(handleMotion)",
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
    expectedCode: "glutMouseFunc(handleMouse)",
  },
  // إضافة المزيد من الدروس حتى id: 20
  {
    id: 7,
    title: "استخدام الألوان في FreeGLUT",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // رسم مربع باللون الأخضر
    glColor3f(0.0f, 1.0f, 0.0f);
    glBegin(GL_QUADS);
        glVertex2f(-0.3f, -0.3f);
        glVertex2f(0.3f, -0.3f);
        glVertex2f(0.3f, 0.3f);
        glVertex2f(-0.3f, 0.3f);
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("استخدام الألوان في FreeGLUT");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية استخدام الألوان لرسم الأشكال المختلفة في FreeGLUT.</p>
        <p><strong>مثال:</strong> رسم مربع باللون الأخضر.</p>
    </div>
</div>
        `,
    expectedCode: "glColor3f(0.0f, 1.0f, 0.0f)",
  },
  {
    id: 8,
    title: "تطبيق التحويلات الهندسية",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // تطبيق الترجمة
    glPushMatrix();
    glTranslatef(0.5f, 0.0f, 0.0f);
    glColor3f(1.0f, 0.0f, 0.0f); // أحمر
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.2f, -0.2f);
        glVertex2f(0.2f, -0.2f);
        glVertex2f(0.0f, 0.2f);
    glEnd();
    glPopMatrix();

    // تطبيق الدوران
    glPushMatrix();
    glRotatef(45.0f, 0.0f, 0.0f, 1.0f);
    glColor3f(0.0f, 0.0f, 1.0f); // أزرق
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.2f, -0.2f);
        glVertex2f(0.2f, -0.2f);
        glVertex2f(0.0f, 0.2f);
    glEnd();
    glPopMatrix();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("تطبيق التحويلات الهندسية");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية تطبيق التحويلات الهندسية مثل الترجمة والدوران على الأشكال في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>استخدام \`glPushMatrix()\` و \`glPopMatrix()\` لحفظ واستعادة حالة المصفوفة.</li>
            <li>تطبيق التحويلات باستخدام &grave;glTranslatef()&grave; و &grave;glRotatef()&grave;.</li>
            <li>رسم الأشكال بعد تطبيق التحويلات.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glTranslatef(0.5f, 0.0f, 0.0f)",
  },
  {
    id: 9,
    title: "إنشاء دائرة باستخدام FreeGLUT",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>
#include <cmath>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(1.0f, 1.0f, 0.0f); // أصفر
    glBegin(GL_POLYGON);
        int numSegments = 100;
        float radius = 0.5f;
        for(int i = 0; i < numSegments; i++) {
            float theta = 2.0f * 3.1415926f * float(i) / float(numSegments);
            float x = radius * cosf(theta);
            float y = radius * sinf(theta);
            glVertex2f(x, y);
        }
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إنشاء دائرة باستخدام FreeGLUT");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء دائرة باستخدام FreeGLUT عن طريق رسم متعدد الأضلاع يتكون من عدة مثلثات صغيرة.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تحديد عدد الأجزاء (<code>numSegments</code>) لتمثيل الدائرة.</li>
            <li>حساب الإحداثيات لكل نقطة على محيط الدائرة باستخدام دوال <code>cos</code> و <code>sin</code>.</li>
            <li>رسم الدائرة باستخدام <code>GL_POLYGON</code>.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glBegin(GL_POLYGON)",
  },
  {
    id: 10,
    title: "استخدام المصفوفات لتحريك الأشكال",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>
#include <vector>

struct Square {
    float x, y;
};

std::vector<Square> squares;
float moveSpeed = 0.01f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.0f, 1.0f, 1.0f); // سماوي
    glBegin(GL_QUADS);
        for(auto &sq : squares) {
            glVertex2f(sq.x - 0.1f, sq.y - 0.1f);
            glVertex2f(sq.x + 0.1f, sq.y - 0.1f);
            glVertex2f(sq.x + 0.1f, sq.y + 0.1f);
            glVertex2f(sq.x - 0.1f, sq.y + 0.1f);
        }
    glEnd();

    glFlush();
}

void update(int value) {
    for(auto &sq : squares) {
        sq.x += moveSpeed;
        if(sq.x > 1.0f || sq.x < -1.0f) {
            moveSpeed = -moveSpeed;
        }
    }
    glutPostRedisplay();
    glutTimerFunc(16, update, 0); // تقريبًا 60 FPS
}

void handleMouse(int button, int state, int x, int y) {
    if(state == GLUT_DOWN) {
        int windowWidth = glutGet(GLUT_WINDOW_WIDTH);
        int windowHeight = glutGet(GLUT_WINDOW_HEIGHT);

        float fx = (float)x / windowWidth * 2.0f - 1.0f;
        float fy = 1.0f - (float)y / windowHeight * 2.0f;

        squares.push_back(Square{fx, fy});
    }
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("استخدام المصفوفات لتحريك الأشكال");
    glutDisplayFunc(display);
    glutMouseFunc(handleMouse);
    glutTimerFunc(0, update, 0);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية استخدام المصفوفات لتحريك الأشكال في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تعريف هيكل &#96;Square&#96; لتخزين إحداثيات المربع.</li>
            <li>استخدام مصفوفة &#96;std::vector&#96; لتخزين عدة مربعات.</li>
            <li>تحديث موقع كل مربع في دالة 'update' لتحريكه.</li>
            <li>إضافة مربعات جديدة عند نقر الماوس.</li>
            <li>ضبط مؤقت لتحديث الشاشة باستمرار.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glutTimerFunc(16, update, 0)",
  },
  {
    id: 11,
    title: "إضافة الإضاءة البسيطة",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void initLighting() {
    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);
    
    GLfloat lightPos[] = {0.0f, 0.0f, 2.0f, 1.0f};
    GLfloat lightColor[] = {1.0f, 1.0f, 1.0f, 1.0f};
    
    glLightfv(GL_LIGHT0, GL_POSITION, lightPos);
    glLightfv(GL_LIGHT0, GL_DIFFUSE, lightColor);
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_COLOR_MATERIAL);
    
    glColor3f(0.5f, 0.5f, 1.0f); // لون أزرق فاتح
    glutSolidTeapot(0.5);
    
    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("إضافة الإضاءة البسيطة");
    initLighting();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إضافة الإضاءة البسيطة إلى المشاهد في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تمكين الإضاءة باستخدام <code>glEnable(GL_LIGHTING)</code> و <code>glEnable(GL_LIGHT0)</code>.</li>
            <li>تحديد موقع الإضاءة ولونها باستخدام <code>glLightfv</code>.</li>
            <li>تمكين اختبار العمق والرسم ثلاثي الأبعاد.</li>
            <li>رسم شكل ثلاثي الأبعاد مثل إبريق الشاي (<code>glutSolidTeapot</code>).</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glEnable(GL_LIGHTING)",
  },
  {
    id: 12,
    title: "إضافة الألوان المتعددة للأشكال",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // رسم مثلث أحمر
    glColor3f(1.0f, 0.0f, 0.0f);
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.6f, -0.5f);
        glVertex2f(-0.2f, -0.5f);
        glVertex2f(-0.4f, 0.0f);
    glEnd();

    // رسم مثلث أخضر
    glColor3f(0.0f, 1.0f, 0.0f);
    glBegin(GL_TRIANGLES);
        glVertex2f(0.2f, -0.5f);
        glVertex2f(0.6f, -0.5f);
        glVertex2f(0.4f, 0.0f);
    glEnd();

    // رسم مثلث أزرق
    glColor3f(0.0f, 0.0f, 1.0f);
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.2f, 0.0f);
        glVertex2f(0.2f, 0.0f);
        glVertex2f(0.0f, 0.5f);
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إضافة الألوان المتعددة للأشكال");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إضافة ألوان متعددة للأشكال المختلفة في FreeGLUT.</p>
        <p><strong>مثال:</strong> رسم ثلاثة مثلثات بألوان مختلفة (أحمر، أخضر، أزرق).</p>
    </div>
</div>
        `,
    expectedCode: "glColor3f(1.0f, 0.0f, 0.0f)",
  },
  {
    id: 13,
    title: "إنشاء حلقة رسم مستمرة",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

float angle = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glPushMatrix();
    glRotatef(angle, 0.0f, 0.0f, 1.0f);
    glColor3f(0.8f, 0.3f, 0.2f); // لون برتقالي
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.3f, -0.3f);
        glVertex2f(0.3f, -0.3f);
        glVertex2f(0.0f, 0.3f);
    glEnd();
    glPopMatrix();

    glFlush();
}

void update(int value) {
    angle += 1.0f;
    if(angle > 360.0f) angle -= 360.0f;
    glutPostRedisplay();
    glutTimerFunc(16, update, 0); // تقريبًا 60 FPS
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إنشاء حلقة رسم مستمرة");
    glutDisplayFunc(display);
    glutTimerFunc(0, update, 0);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء حلقة رسم مستمرة لتحريك الأشكال في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تعريف متغير &grave;angle&grave; للتحكم في زاوية الدوران.</li>
            <li>استخدام دالة &grave;glRotatef&grave; لتدوير الشكل.</li>
            <li>إعداد مؤقت لتحديث الزاوية واستدعاء إعادة الرسم باستمرار.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glutTimerFunc(16, update, 0)",
  },
  {
    id: 14,
    title: "إنشاء شبكة باستخدام FreeGLUT",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(1.0f, 1.0f, 1.0f); // أبيض

    // رسم الخطوط الأفقية
    for(float y = -1.0f; y <= 1.0f; y += 0.2f) {
        glBegin(GL_LINES);
            glVertex2f(-1.0f, y);
            glVertex2f(1.0f, y);
        glEnd();
    }

    // رسم الخطوط العمودية
    for(float x = -1.0f; x <= 1.0f; x += 0.2f) {
        glBegin(GL_LINES);
            glVertex2f(x, -1.0f);
            glVertex2f(x, 1.0f);
        glEnd();
    }

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إنشاء شبكة باستخدام FreeGLUT");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء شبكة باستخدام FreeGLUT عن طريق رسم خطوط أفقية وعمودية بشكل منتظم.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>استخدام \`glBegin(GL_LINES)\` لرسم الخطوط.</li>
            <li>تكرار رسم الخطوط الأفقية والعمودية باستخدام حلقات.</li>
            <li>ضبط الألوان المناسبة لرسم الشبكة.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glBegin(GL_LINES)",
  },
  {
    id: 15,
    title: "إضافة تفاعل لوحة المفاتيح",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

float posX = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.2f, 0.8f, 0.2f); // أخضر فاتح
    glBegin(GL_QUADS);
        glVertex2f(posX - 0.1f, -0.1f);
        glVertex2f(posX + 0.1f, -0.1f);
        glVertex2f(posX + 0.1f, 0.1f);
        glVertex2f(posX - 0.1f, 0.1f);
    glEnd();

    glFlush();
}

void handleKeypress(unsigned char key, int x, int y) {
    switch(key) {
        case 'a': // تحريك إلى اليسار
            posX -= 0.05f;
            break;
        case 'd': // تحريك إلى اليمين
            posX += 0.05f;
            break;
        case 27: // مفتاح Esc للخروج
            exit(0);
            break;
    }
    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إضافة تفاعل لوحة المفاتيح");
    glutDisplayFunc(display);
    glutKeyboardFunc(handleKeypress);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إضافة تفاعل لوحة المفاتيح لتحريك الأشكال في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تعريف متغير &grave;posX&grave; لتحديد موقع الشكل على المحور الأفقي.</li>
            <li>استخدام دالة &grave;handleKeypress&grave; لمعالجة مدخلات لوحة المفاتيح.</li>
            <li>تحديث موقع الشكل بناءً على الأزرار المضغوطة ('a' للتحريك إلى اليسار، 'd' للتحريك إلى اليمين).</li>
            <li>إعادة رسم الشاشة بعد كل تحديث.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glutKeyboardFunc(handleKeypress)",
  },
  {
    id: 16,
    title: "استخدام الإضاءة المتقدمة",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void initLighting() {
    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);
    glEnable(GL_LIGHT1);
    
    // إعداد الإضاءة الأولى (منتجعة)
    GLfloat lightPos0[] = {1.0f, 1.0f, 1.0f, 1.0f};
    GLfloat lightColor0[] = {1.0f, 1.0f, 1.0f, 1.0f};
    glLightfv(GL_LIGHT0, GL_POSITION, lightPos0);
    glLightfv(GL_LIGHT0, GL_DIFFUSE, lightColor0);
    
    // إعداد الإضاءة الثانية (خافتة)
    GLfloat lightPos1[] = {-1.0f, -1.0f, 1.0f, 1.0f};
    GLfloat lightColor1[] = {0.3f, 0.3f, 0.3f, 1.0f};
    glLightfv(GL_LIGHT1, GL_POSITION, lightPos1);
    glLightfv(GL_LIGHT1, GL_DIFFUSE, lightColor1);
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_COLOR_MATERIAL);
    
    glColor3f(0.8f, 0.2f, 0.2f); // أحمر فاتح
    glutSolidSphere(0.5, 50, 50);
    
    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("استخدام الإضاءة المتقدمة");
    initLighting();
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية استخدام الإضاءة المتقدمة لإضفاء واقعية أكبر على الأشكال ثلاثية الأبعاد في FreeGLUT.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تمكين الإضاءة باستخدام &#96;glEnable(GL_LIGHTING)&#96;.</li>
            <li>تمكين مصادر الإضاءة (<code>GL_LIGHT0</code> و <code>GL_LIGHT1</code>).</li>
            <li>تحديد مواقع وألوان الإضاءة باستخدام <code>glLightfv</code>.</li>
            <li>تمكين اختبار العمق والرسم ثلاثي الأبعاد.</li>
            <li>رسم شكل ثلاثي الأبعاد مثل كرة (<code>glutSolidSphere</code>).</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glEnable(GL_LIGHT1)",
  },
  {
    id: 17,
    title: "إنشاء مستطيل متحرك",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

float posX = -0.9f;
float speed = 0.02f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.4f, 0.6f, 0.8f); // أزرق فاتح
    glBegin(GL_QUADS);
        glVertex2f(posX, -0.2f);
        glVertex2f(posX + 0.2f, -0.2f);
        glVertex2f(posX + 0.2f, 0.2f);
        glVertex2f(posX, 0.2f);
    glEnd();

    glFlush();
}

void update(int value) {
    posX += speed;
    if(posX > 1.0f || posX < -1.0f) {
        speed = -speed; // عكس الاتجاه عند الوصول للحافة
    }
    glutPostRedisplay();
    glutTimerFunc(16, update, 0); // تقريبًا 60 FPS
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("إنشاء مستطيل متحرك");
    glutDisplayFunc(display);
    glutTimerFunc(0, update, 0);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء مستطيل متحرك في FreeGLUT باستخدام تحديثات مستمرة لموقع المستطيل.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تعريف متغيرات &#96;posX&#96; و &#96;speed&#96; للتحكم في موقع المستطيل وسرعته.</li>
            <li>استخدام دالة &#96;update&#96; لتحديث موقع المستطيل باستمرار.</li>
            <li>عكس اتجاه الحركة عند الوصول إلى حدود النافذة.</li>
            <li>إعادة رسم الشاشة بعد كل تحديث.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glutTimerFunc(16, update, 0)",
  },
  {
    id: 18,
    title: "إنشاء مستطيل ثلاثي الأبعاد",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);

    glColor3f(0.6f, 0.2f, 0.8f); // بنفسجي

    glBegin(GL_QUADS);
        // الأمام
        glVertex3f(-0.5f, -0.5f,  0.5f);
        glVertex3f( 0.5f, -0.5f,  0.5f);
        glVertex3f( 0.5f,  0.5f,  0.5f);
        glVertex3f(-0.5f,  0.5f,  0.5f);

        // الخلف
        glVertex3f(-0.5f, -0.5f, -0.5f);
        glVertex3f(-0.5f,  0.5f, -0.5f);
        glVertex3f( 0.5f,  0.5f, -0.5f);
        glVertex3f( 0.5f, -0.5f, -0.5f);

        // الأعلى
        glVertex3f(-0.5f,  0.5f, -0.5f);
        glVertex3f(-0.5f,  0.5f,  0.5f);
        glVertex3f( 0.5f,  0.5f,  0.5f);
        glVertex3f( 0.5f,  0.5f, -0.5f);

        // الأسفل
        glVertex3f(-0.5f, -0.5f, -0.5f);
        glVertex3f( 0.5f, -0.5f, -0.5f);
        glVertex3f( 0.5f, -0.5f,  0.5f);
        glVertex3f(-0.5f, -0.5f,  0.5f);

        // اليمين
        glVertex3f( 0.5f, -0.5f, -0.5f);
        glVertex3f( 0.5f,  0.5f, -0.5f);
        glVertex3f( 0.5f,  0.5f,  0.5f);
        glVertex3f( 0.5f, -0.5f,  0.5f);

        // اليسار
        glVertex3f(-0.5f, -0.5f, -0.5f);
        glVertex3f(-0.5f, -0.5f,  0.5f);
        glVertex3f(-0.5f,  0.5f,  0.5f);
        glVertex3f(-0.5f,  0.5f, -0.5f);
    glEnd();

    glFlush();
}

void reshape(int width, int height) {
    if(height == 0) height = 1; // لتجنب القسمة على صفر
    float aspect = (float)width / (float)height;

    glViewport(0, 0, width, height);

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(45.0, aspect, 1.0, 100.0);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    gluLookAt(
        2.0, 2.0, 2.0, // موقع الكاميرا
        0.0, 0.0, 0.0, // النقطة المستهدفة
        0.0, 1.0, 0.0  // اتجاه الأعلى
    );
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    glutCreateWindow("إنشاء مستطيل ثلاثي الأبعاد");
    glutDisplayFunc(display);
    glutReshapeFunc(reshape);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء مستطيل ثلاثي الأبعاد في FreeGLUT باستخدام مصفوفات العرض.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تمكين اختبار العمق باستخدام <code>glEnable(GL_DEPTH_TEST)</code>.</li>
            <li>تحديد مصفوفة العرض باستخدام <code>gluPerspective</code> و <code>gluLookAt</code> في دالة <code>reshape</code>.</li>
            <li>رسم المستطيل ثلاثي الأبعاد باستخدام <code>GL_QUADS</code> ورسم جميع الوجوه الستة.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "gluLookAt(2.0, 2.0, 2.0",
  },
  {
    id: 19,
    title: "إنشاء دائرة ثلاثية الأبعاد",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>
#include <cmath>

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);

    glColor3f(1.0f, 0.5f, 0.0f); // برتقالي

    glBegin(GL_TRIANGLE_FAN);
        glVertex3f(0.0f, 0.0f, 0.0f); // المركز
        int numSegments = 100;
        float radius = 0.5f;
        for(int i = 0; i <= numSegments; i++) {
            float angle = 2.0f * 3.1415926f * i / numSegments;
            float x = radius * cosf(angle);
            float y = radius * sinf(angle);
            glVertex3f(x, y, 0.0f);
        }
    glEnd();

    glFlush();
}

void reshape(int width, int height) {
    if(height == 0) height = 1; // لتجنب القسمة على صفر
    float aspect = (float)width / (float)height;

    glViewport(0, 0, width, height);

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(45.0, aspect, 1.0, 100.0);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    gluLookAt(
        0.0, 0.0, 5.0, // موقع الكاميرا
        0.0, 0.0, 0.0, // النقطة المستهدفة
        0.0, 1.0, 0.0  // اتجاه الأعلى
    );
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    glutCreateWindow("إنشاء دائرة ثلاثية الأبعاد");
    glutDisplayFunc(display);
    glutReshapeFunc(reshape);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إنشاء دائرة ثلاثية الأبعاد في FreeGLUT باستخدام مصفوفات العرض.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تمكين اختبار العمق باستخدام \`glEnable(GL_DEPTH_TEST)\`.</li>
            <li>تحديد مصفوفة العرض باستخدام \`gluPerspective\` و \`gluLookAt\` في دالة \`reshape\`.</li>
            <li>رسم الدائرة ثلاثية الأبعاد باستخدام \`GL_TRIANGLE_FAN\`.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "gluLookAt(0.0, 0.0, 5.0",
  },
  {
    id: 20,
    title: "إضافة حركة ديناميكية باستخدام الوقت",
    content: `
<div class="tutorial-content">
    <div class="tutorial-code">
        <pre><code>#include <GL/freeglut.h>

float angle = 0.0f;

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);

    glPushMatrix();
    glRotatef(angle, 0.0f, 1.0f, 0.0f); // دوران حول المحور Y
    glColor3f(0.3f, 0.7f, 0.9f); // أزرق سماوي
    glutSolidCube(1.0f);
    glPopMatrix();

    glFlush();
}

void update(int value) {
    angle += 0.5f;
    if(angle > 360.0f) angle -= 360.0f;
    glutPostRedisplay();
    glutTimerFunc(16, update, 0); // تقريبًا 60 FPS
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    glutCreateWindow("إضافة حركة ديناميكية باستخدام الوقت");
    glutDisplayFunc(display);
    glutTimerFunc(0, update, 0);
    glutMainLoop();
    return 0;
}</code></pre>
    </div>
    <div class="tutorial-text">
        <p>تعلم كيفية إضافة حركة ديناميكية للأشكال في FreeGLUT باستخدام تحديثات تعتمد على الوقت.</p>
        <p><strong>خطوات التنفيذ:</strong></p>
        <ol>
            <li>تعريف متغير <code>angle</code> للتحكم في زاوية الدوران.</li>
            <li>استخدام دالة <code>glRotatef</code> لتدوير الشكل حول المحور Y.</li>
            <li>إعداد مؤقت لتحديث الزاوية واستدعاء إعادة الرسم باستمرار.</li>
            <li>رسم شكل ثلاثي الأبعاد مثل مكعب (<code>glutSolidCube</code>) بعد تطبيق التحويل.</li>
        </ol>
    </div>
</div>
        `,
    expectedCode: "glutTimerFunc(16, update, 0)",
  },
];

// بيانات الاختبارات
const quizzesData = [
  {
    id: 1,
    tutorialId: 1,
    question: "ما هو الاستخدام الرئيسي لـ FreeGLUT؟",
    options: {
      a: "معالجة عمليات الشبكة",
      b: "إنشاء النوافذ ومعالجة المدخلات في تطبيقات OpenGL",
      c: "إدارة قواعد البيانات",
      d: "معالجة الصور",
    },
    correct: "b",
  },
  {
    id: 2,
    tutorialId: 2,
    question: "أي دالة تستخدم لتحديد الأشكال الهندسية في OpenGL؟",
    options: {
      a: "glBegin()",
      b: "glVertex2f()",
      c: "glEnd()",
      d: "جميع ما ذكر",
    },
    correct: "d",
  },
  {
    id: 3,
    tutorialId: 3,
    question:
      "ما هو الشكل الذي يتم إنشاؤه بدمج مربع ومثلث في مثال 'الأشكال الهندسية المنزل'؟",
    options: {
      a: "هرم",
      b: "منزل",
      c: "كرة",
      d: "أسطوانة",
    },
    correct: "b",
  },
  {
    id: 4,
    tutorialId: 4,
    question:
      "أي زر ماوس يغير اللون إلى الأزرق في مثال 'تغيير اللون عند النقر بالماوس'؟",
    options: {
      a: "الزر الأيسر",
      b: "الزر الأوسط",
      c: "الزر الأيمن",
      d: "لا شيء مما ذكر",
    },
    correct: "c",
  },
  {
    id: 5,
    tutorialId: 5,
    question:
      "ماذا تفعل دالة 'glutPassiveMotionFunc' في مثال 'تغيير اللون تدريجيًا بحركة الماوس'؟",
    options: {
      a: "تعالج نقرات الماوس",
      b: "تعالج إدخال لوحة المفاتيح",
      c: "تعالج حركة الماوس بدون ضغط الأزرار",
      d: "تعالج تغيير حجم النافذة",
    },
    correct: "c",
  },
  {
    id: 6,
    tutorialId: 6,
    question:
      "في مثال 'رسم الأشكال عند نقر الماوس'، أي شكل هندسي يستخدم لرسم الأشكال؟",
    options: {
      a: "GL_TRIANGLES",
      b: "GL_QUADS",
      c: "GL_POINTS",
      d: "GL_LINES",
    },
    correct: "c",
  },
  {
    id: 7,
    tutorialId: 7,
    question: "ما هي الدالة المستخدمة لتحديد الألوان في OpenGL؟",
    options: {
      a: "glColor3f()",
      b: "glSetColor()",
      c: "glColor()",
      d: "glSetRGB()",
    },
    correct: "a",
  },
  {
    id: 8,
    tutorialId: 8,
    question: "ما هو الغرض من 'glPushMatrix()' و 'glPopMatrix()' في OpenGL؟",
    options: {
      a: "للتعامل مع الإضاءة",
      b: "لإدارة مكدس المصفوفة للتحويلات",
      c: "لتحميل الخامات",
      d: "لإدارة المخازن",
    },
    correct: "b",
  },
  {
    id: 9,
    tutorialId: 9,
    question: "أي تحويل غير مغطى في درس 'التحويلات الأساسية'؟",
    options: {
      a: "الترجمة",
      b: "التوسيع",
      c: "القص",
      d: "الدوران",
    },
    correct: "c",
  },
  {
    id: 10,
    tutorialId: 10,
    question:
      "في مثال 'ترجمة الرسوم المتحركة'، ماذا يحدث عندما تصل الكائن إلى الحد الفاصل؟",
    options: {
      a: "يختفي",
      b: "يتغير لونه",
      c: "يعكس الاتجاه",
      d: "يتوقف عن الحركة",
    },
    correct: "c",
  },
  {
    id: 11,
    tutorialId: 11,
    question: "ما هو الغرض من `glEnable(GL_LIGHTING)` في FreeGLUT؟",
    options: {
      a: "تمكين الإضاءة",
      b: "تعطيل الإضاءة",
      c: "تمكين الألوان",
      d: "تعطيل الألوان",
    },
    correct: "a",
  },
  {
    id: 12,
    tutorialId: 12,
    question: "كيف يتم تحديد لون الشكل في OpenGL؟",
    options: {
      a: "باستخدام `glColor3f()`",
      b: "باستخدام `glSetColor()`",
      c: "باستخدام `glColor()`",
      d: "باستخدام `glSetRGB()`",
    },
    correct: "a",
  },
  {
    id: 13,
    tutorialId: 13,
    question: "ما هي الدالة المستخدمة لتدوير الشكل في OpenGL؟",
    options: {
      a: "glTranslatef()",
      b: "glRotatef()",
      c: "glScalef()",
      d: "glRotate()",
    },
    correct: "b",
  },
  {
    id: 14,
    tutorialId: 14,
    question: "أي دالة تستخدم لرسم الخطوط في OpenGL؟",
    options: {
      a: "GL_LINES",
      b: "GL_TRIANGLES",
      c: "GL_QUADS",
      d: "GL_POINTS",
    },
    correct: "a",
  },
  {
    id: 15,
    tutorialId: 15,
    question: "ما هو الغرض من `glutTimerFunc` في FreeGLUT؟",
    options: {
      a: "لإعداد مؤقت لإعادة الرسم",
      b: "لتحديد سرعة الحركة",
      c: "لتمكين الإضاءة",
      d: "تعطيل الإضاءة",
    },
    correct: "a",
  },
  {
    id: 16,
    tutorialId: 16,
    question: "ما هي الدالة المستخدمة لتعريف مصفوفة الإضاءة في OpenGL؟",
    options: {
      a: "glLightfv()",
      b: "glMaterialfv()",
      c: "glEnable()",
      d: "glDisable()",
    },
    correct: "a",
  },
  {
    id: 17,
    tutorialId: 17,
    question: "أي دالة تستخدم لتطبيق الترجمة في OpenGL؟",
    options: {
      a: "glRotatef()",
      b: "glTranslatef()",
      c: "glScalef()",
      d: "glPushMatrix()",
    },
    correct: "b",
  },
  {
    id: 18,
    tutorialId: 18,
    question: "ما هو الغرض من دالة `reshape` في OpenGL؟",
    options: {
      a: "رسم الأشكال",
      b: "تحديد مصفوفة العرض",
      c: "إعداد الإضاءة",
      d: "تحريك الكاميرا",
    },
    correct: "b",
  },
  {
    id: 19,
    tutorialId: 19,
    question: "كيف يتم تحديد موقع الكاميرا في OpenGL؟",
    options: {
      a: "باستخدام `glTranslatef()`",
      b: "باستخدام `gluLookAt()`",
      c: "باستخدام `glRotatef()`",
      d: "باستخدام `glScalef()`",
    },
    correct: "b",
  },
  {
    id: 20,
    tutorialId: 20,
    question: "ما هي الدالة المستخدمة لتمكين اختبار العمق في OpenGL؟",
    options: {
      a: "glEnable(GL_DEPTH_TEST)",
      b: "glDisable(GL_DEPTH_TEST)",
      c: "glEnable(GL_LIGHTING)",
      d: "glDisable(GL_LIGHTING)",
    },
    correct: "a",
  },
];
function generateTutorials() {
  const tutorialsSection = document.querySelector(".tutorials");
  tutorialsData.forEach((tutorial) => {
    const tutorialDiv = document.createElement("div");
    tutorialDiv.classList.add("tutorial");
    tutorialDiv.setAttribute("data-tutorial-id", tutorial.id);

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
  const quizzesSection = document.querySelector(".quizzes");
  quizzesData.forEach((quiz) => {
    const quizDiv = document.createElement("div");
    quizDiv.classList.add("quiz");
    quizDiv.setAttribute("data-quiz-id", quiz.id);

    const tutorialTitle = tutorialsData.find(
      (t) => t.id === quiz.tutorialId
    ).title;
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

/*-------------------------------------------------------------------------------
  إكمال الدروس والاختبارات
-------------------------------------------------------------------------------*/
function completeTutorial(tutorialId) {
  const tutorialDiv = document.querySelector(
    `.tutorial[data-tutorial-id="${tutorialId}"]`
  );
  tutorialDiv.style.display = "none";
  updateProgress("tutorial");
}

function submitQuiz(quizId) {
  const quiz = quizzesData.find((q) => q.id === quizId);
  const selectedOption = document.querySelector(
    `.quiz[data-quiz-id="${quizId}"] input[type="radio"]:checked`
  );
  const resultDiv = document.getElementById(`result-quiz${quizId}`);

  if (selectedOption) {
    if (selectedOption.value === quiz.correct) {
      resultDiv.innerHTML = '<span style="color: green;">صحيح!</span>';
      updateProgress("quiz");
      // Prompt user to write code
      promptCodeWriting(quiz.tutorialId);
    } else {
      resultDiv.innerHTML =
        '<span style="color: red;">خطأ. حاول مرة أخرى.</span>';
    }
  } else {
    resultDiv.innerHTML = '<span style="color: red;">يرجى اختيار خيار.</span>';
  }
}

function promptCodeWriting(tutorialId) {
  alert("عمل رائع! الآن، اكتب الشيفرة المقابلة في محرر الشيفرة وقم بتحميلها.");
  scrollToSection("code-editor"); // إذا كانت لديك منطقة كود إيديتر
}

/*-------------------------------------------------------------------------------
  تتبع التقدم في الدروس والاختبارات
-------------------------------------------------------------------------------*/
let tutorialsCompleted = 0;
let quizzesCompleted = 0;
const totalTutorials = tutorialsData.length;
const totalQuizzes = quizzesData.length;

function updateProgress(type) {
  if (type === "tutorial") {
    tutorialsCompleted = Math.min(tutorialsCompleted + 1, totalTutorials);
    updateProgressBar("tutorial-progress", tutorialsCompleted, totalTutorials);
  } else if (type === "quiz") {
    quizzesCompleted = Math.min(quizzesCompleted + 1, totalQuizzes);
    updateProgressBar("quiz-progress", quizzesCompleted, totalQuizzes);
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
document.addEventListener("DOMContentLoaded", () => {
  // Generate Tutorials and Quizzes
  generateTutorials();
  generateQuizzes();

  // Initialize progress bars
  updateProgressBar("tutorial-progress", tutorialsCompleted, totalTutorials);
  updateProgressBar("quiz-progress", quizzesCompleted, totalQuizzes);

  // إذا لديك محرر CodeMirror في صفحتك
  // const editor = CodeMirror.fromTextArea(document.getElementById('code-editor-textarea'), {
  //     lineNumbers: true,
  //     mode: "text/x-c++src",
  //     theme: "dracula",
  //     tabSize: 4,
  //     indentWithTabs: true,
  //     lineWrapping: true
  // });
  // window.codeMirrorInstance = editor;
});

/*-------------------------------------------------------------------------------
  دوال اختيارية: التحميل والتحقق من الشيفرة
-------------------------------------------------------------------------------*/
function downloadCode() {
  if (!window.codeMirrorInstance) return;
  const code = window.codeMirrorInstance.getValue();
  const blob = new Blob([code], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "main.cpp";
  a.click();
  URL.revokeObjectURL(url);

  const output = document.getElementById("output");
  if (output) {
    output.innerHTML =
      '<span style="color: green;">تم تحميل الشيفرة بنجاح!</span>';
  }
}

function validateCode() {
  if (!window.codeMirrorInstance) return;
  const code = window.codeMirrorInstance.getValue();

  if (code.includes("glutCreateWindow")) {
    alert("شيفرتك تبدو جيدة!");
  } else {
    alert("يرجى التأكد من تضمين دالة glutCreateWindow.");
  }
}

/*-------------------------------------------------------------------------------
  شيفرة التنقل في الأجهزة المحمولة
-------------------------------------------------------------------------------*/
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/*-------------------------------------------------------------------------------
  التمرير السلس للأقسام
-------------------------------------------------------------------------------*/
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 60,
      behavior: "smooth",
    });
  }
}
