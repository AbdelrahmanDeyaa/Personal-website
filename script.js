// Adding smooth scrolling effect for navbar links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Shrink navbar on scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('shrink');
    } else {
        document.querySelector('.navbar').classList.remove('shrink');
    }

    // Highlight navbar links on scroll
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelector('.navbar-nav a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('.navbar-nav a[href*=' + id + ']').classList.remove('active');
        }
    });
});

// Project modal
function openProject(title, details) {
    document.getElementById('projectModalLabel').innerText = title;
    document.getElementById('projectDetails').innerText = details;
    $('#projectModal').modal('show');
}

// تحديث محتوى النافذة المودال وتشغيلها عند النقر على أي زر فتح المشروع
$('button[data-toggle="modal"]').click(function () {
    // الحصول على معلومات المشروع من البيانات المخصصة في الزر
    var title = $(this).data('title');
    var details = $(this).data('details');
    var videoUrl = $(this).data('video-url');
    var pdfUrl = $(this).data('pdf-url');

    // تحديث محتوى النافذة المودال بمعلومات المشروع
    $('#projectModalLabel').text(title);
    $('#projectDetails').text(details);

    // إعادة تعيين إطار الـ iframe وعنصر الفيديو
    $('#projectFrame').attr('src', '').hide();
    $('#projectVideo').attr('src', '').hide();

    // عرض الفيديو إذا كان متاحًا، وإلا فعرض المستند PDF
    if (videoUrl) {
        $('#projectVideo').attr('src', videoUrl).show();
    } else if (pdfUrl) {
        $('#projectFrame').attr('src', pdfUrl).show();
    }

    // عرض النافذة المودال
    $('#projectModal').modal('show');
});
document.getElementById("language-toggle").addEventListener("click", function() {
    // التحقق من الصفحة الحالية
    if (window.location.href.includes("english.html")) {
        // إذا كانت الصفحة الإنجليزية، إعادة التوجيه إلى الصفحة العربية
        window.location.href = "index.html";
    } else {
        // إذا كانت الصفحة العربية أو أي صفحة أخرى، إعادة التوجيه إلى الصفحة الإنجليزية
        window.location.href = "english.html";
    }
    // إغلاق القائمة بعد الضغط
    var navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.remove('show');
    });

    // إغلاق القائمة عند الضغط على أي رابط
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            var navbarCollapse = document.getElementById('navbarNav');
            navbarCollapse.classList.remove('show');
        });
});
