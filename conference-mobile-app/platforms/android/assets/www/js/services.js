angular.module('conference.services', [])
.factory('ConferenceData', function() {
  var data = {
    "dates": {
        "2014-10-20": [
            {
                "description": null,
                "id": 7,
                "speaker": [],
                "time": "09:00",
                "title": "Registration"
            },
            {
                "description": "<p>Bokeh es un popular proyecto de visualizaci\u00f3n en la web que provee de m\u00faltiples herramientas para la construcci\u00f3n de no s\u00f3lo simples gr\u00e1ficos sino tambi\u00e9n complejas visualizaciones (optimizadas para la exploraci\u00f3n de datos por parte del usuario final). Este tutorial pretende introducir y explorar dichas herramientas con el objeto de construir complejas visualizaciones de una manera simple.</p>",
                "id": 15,
                "speaker": [
                    17
                ],
                "time": "10:00",
                "title": "Visualizaciones con Bokeh"
            },
            {
                "description": null,
                "id": 18,
                "speaker": [],
                "time": "11:00",
                "title": "Break"
            },
            {
                "description": "<p>Bokeh es un popular proyecto de visualizaci\u00f3n en la web que provee de m\u00faltiples herramientas para la construcci\u00f3n de no s\u00f3lo simples gr\u00e1ficos sino tambi\u00e9n complejas visualizaciones (optimizadas para la exploraci\u00f3n de datos por parte del usuario final). Este tutorial pretende introducir y explorar dichas herramientas con el objeto de construir complejas visualizaciones de una manera simple.</p>",
                "id": 17,
                "speaker": [
                    17
                ],
                "time": "11:30",
                "title": "Visualizaciones con Bokeh"
            },
            {
                "description": null,
                "id": 10,
                "speaker": [],
                "time": "13:00",
                "title": "Lunch"
            },
            {
                "description": null,
                "id": 19,
                "speaker": [],
                "time": "14:00",
                "title": "Keynote"
            },
            {
                "description": "<p>El notebook de Jupyter permite construir documentos complejos y ejecutables, f\u00e1cilmente distribu\u00edbles, trazables, y reproducibles. En esta charla abordaremos algunas de las principales caracter\u00edsticas de esta herramienta computacional, tales como la exploraci\u00f3n interactiva y el an\u00e1lisis de datos, blogging, presentaciones complejas basadas en html-js, documentaci\u00f3n, desarrollo in situ, entre otras.</p>",
                "id": 20,
                "speaker": [
                    17
                ],
                "time": "15:00",
                "title": "La revoluci\u00f3n de Jupyter"
            },
            {
                "description": "<p>Este es un proyecto de rob\u00f3tica para alumnos de nivel secundario de escuelas t\u00e9cnicas con especialidad en electr\u00f3nica.\nEn esta presentaci\u00f3n introduciremos los conceptos b\u00e1sicos para el uso de la Placa Base Ping\u00fcino-PIC18F4550 y su vinculaci\u00f3n con Python para su funcionamiento en modo interfaz con una tablet sobre plataforma ANDROID.</p>",
                "id": 21,
                "speaker": [
                    16
                ],
                "time": "15:45",
                "title": "Rob\u00f3tica Educativa con Android + Python + Ping\u00fcino-PIC18F4550"
            },
            {
                "description": "<p>No todos los problemas de machine learning requieren grandes vol\u00famenes de datos y poder de c\u00f3mputo para ser resueltos. En muchos casos podemos encontrarnos con problemas peque\u00f1os, e incluso es posible \"achicar\" problemas grandes sin dejar de obtener resultados aceptables para su contexto.</p>\n<p>En esta charla veremos un ejemplo, su historia de fondo, y algunos consejos sobre c\u00f3mo achicar problemas.</p>",
                "id": 22,
                "speaker": [
                    19
                ],
                "time": "16:15",
                "title": "Machine Learning y problemas peque\u00f1os"
            },
            {
                "description": "<p>Una herramienta como ltrace intercepta y registra las llamadas a funciones de librer\u00edas din\u00e1micas de manera eficiente sin necesidad del c\u00f3digo fuente del programa analizado.\nEn esta charla, se combinan concepto de bajo nivel de sistemas operativos con el manejo inteligente de los bindings de las funciones de ptrace en Python para emular el uso de ltrace (e incluso ir un paso m\u00e1s all\u00e1!)</p>",
                "id": 23,
                "speaker": [
                    3
                ],
                "time": "16:45",
                "title": "Espiando procesos locales con Python-Ptrace"
            },
            {
                "description": null,
                "id": 2,
                "speaker": [],
                "time": "17:30",
                "title": "Lightning talks"
            }
        ],
        "2014-10-21": [
            {
                "description": null,
                "id": 8,
                "speaker": [],
                "time": "09:00",
                "title": "Registration"
            },
            {
                "description": null,
                "id": 24,
                "speaker": [],
                "time": "10:00",
                "title": "Tutorial"
            },
            {
                "description": null,
                "id": 25,
                "speaker": [],
                "time": "11:00",
                "title": "Break"
            },
            {
                "description": null,
                "id": 26,
                "speaker": [],
                "time": "11:30",
                "title": "Tutorial"
            },
            {
                "description": null,
                "id": 11,
                "speaker": [],
                "time": "13:00",
                "title": "Lunch"
            },
            {
                "description": null,
                "id": 27,
                "speaker": [],
                "time": "14:00",
                "title": "Keynote"
            },
            {
                "description": "<p>La  Red Federal de Fibra \u00d3ptica (ReFeFO) es una red multiprop\u00f3sito, que permite la conexi\u00f3n de instituciones p\u00fablicas. En esta charla se presentar\u00e1 una aplicaci\u00f3n, completamente implementada en Python,  para dise\u00f1ar y simular esta red. Se analizar\u00e1n los problemas de escalabilidad y performance que afrontamos, las soluciones propuestas para resolverlos y las herramientas utilizadas.</p>",
                "id": 28,
                "speaker": [
                    11
                ],
                "time": "15:00",
                "title": "FOP-ARSAT: Simulando la Red Federal de Fibra \u00d3ptica usando Python"
            },
            {
                "description": "<p>Utilizaci\u00f3n de SVG como herramienta para la dinamizaci\u00f3n de esquemas.\nPresentaci\u00f3n de los retos al momento de utilizar muchos puntos de entrada para obtener un estado sint\u00e9tico.</p>",
                "id": 29,
                "speaker": [
                    4
                ],
                "time": "15:45",
                "title": "Utilizando SVG para visualizar datos estructurados"
            },
            {
                "description": "<p>Hoy en d\u00eda es casi impensable desarrollar software, incluso en el ambiente cient\u00edfico, sin utilizar alg\u00fan tipo de herramienta de versionado de c\u00f3digo. En esta charla haremos una introducci\u00f3n (teor\u00eda y ejemplos pr\u00e1cticos) a Git, la herramienta actualmente m\u00e1s utilizada para versionar c\u00f3digo fuente.</p>",
                "id": 30,
                "speaker": [
                    19
                ],
                "time": "16:15",
                "title": "Versionado de c\u00f3digo con git"
            },
            {
                "description": "<p>La charla se basa en comparaciones de c\u00f3digo de un algoritmo conocido com Random Flow Generator escrito en Python y el c\u00f3digo original escrito en C y Fortran. Adem\u00e1s de contar un poco la experiencia de un \"no programador\" acercandose a la computaci\u00f3n cient\u00edfica por medio de python.</p>",
                "id": 31,
                "speaker": [
                    7
                ],
                "time": "16:45",
                "title": "Desarrollando mec\u00e1nica de fluidos con Python"
            },
            {
                "description": null,
                "id": 3,
                "speaker": [],
                "time": "17:30",
                "title": "Lightning talks"
            }
        ],
        "2014-10-22": [
            {
                "description": null,
                "id": 9,
                "speaker": [],
                "time": "09:00",
                "title": "Registration"
            },
            {
                "description": "<p>Se realizar\u00e1 una introducci\u00f3n a las bases de dato OLAP, su despliegue y formas de consultarlas. Tambi\u00e9n se introducir\u00e1 a los asistentes a la creaci\u00f3n de ETL y DataMarts</p>",
                "id": 32,
                "speaker": [
                    8
                ],
                "time": "10:00",
                "title": "Fundamentos de Bussines Intelligence"
            },
            {
                "description": null,
                "id": 33,
                "speaker": [],
                "time": "11:00",
                "title": "Break"
            },
            {
                "description": "<p>Se realizar\u00e1 una introducci\u00f3n a las bases de dato OLAP, su despliegue y formas de consultarlas. Tambi\u00e9n se introducir\u00e1 a los asistentes a la creaci\u00f3n de ETL y DataMarts</p>",
                "id": 34,
                "speaker": [
                    8
                ],
                "time": "11:30",
                "title": "Fundamentos de Bussines Intelligence"
            },
            {
                "description": null,
                "id": 12,
                "speaker": [],
                "time": "13:00",
                "title": "Lunch"
            },
            {
                "description": null,
                "id": 35,
                "speaker": [],
                "time": "14:00",
                "title": "Keynote"
            },
            {
                "description": "<p>Desde la experiencia de un hombre de software, a los hombres y mujeres de la academia, con respeto y cari\u00f1o.</p>",
                "id": 36,
                "speaker": [
                    12
                ],
                "time": "15:00",
                "title": "Diez consejos para un mejor software (de) cient\u00edfico(s)"
            },
            {
                "description": "<p>El uso de Python dentro del campo de la Computaci\u00f3n Cient\u00edfica ha progresado durante los \u00faltimos a\u00f1os hasta permitir el reemplazo casi total de las herramientas utilizadas hasta el momento. Sin embargo, la migraci\u00f3n a un entorno Python en este campo suele presentar algunas dificultades. En esta charla analizaremos algunas de ellas, presentando algunas soluciones que se encontraron para mitigarlas.</p>",
                "id": 37,
                "speaker": [
                    11
                ],
                "time": "15:45",
                "title": "Python Cient\u00edfico: migrando de Matlab a Python "
            },
            {
                "description": "<p>En el presente trabajo desarrollamos un sistema de grabaci\u00f3n a trav\u00e9s de Internet que nos permiti\u00f3 recolectar grabaciones de hablantes provenientes de ambos grupos. Utilizando estos datos, analizamos efectivamente cu\u00e1les son las caracter\u00edsticas m\u00e1s predominantes y c\u00f3mo repercuten para una buena clasificaci\u00f3n.</p>",
                "id": 38,
                "speaker": [
                    5
                ],
                "time": "16:15",
                "title": "Sistema de grabaci\u00f3n para detectar hablantes de Buenos Aires y C\u00f3rdoba"
            },
            {
                "description": "<p>Se contara la experiencia de la contrucci\u00f3n del plan de un doctorado en ingenier\u00eda en el cual Python y SciPyAr cumplieron un rol determinante en la realizaci\u00f3n de la propuesta.</p>",
                "id": 39,
                "speaker": [
                    8
                ],
                "time": "16:45",
                "title": "Dise\u00f1o de un plan doctoral para el an\u00e1lisis de datos astrof\u00edsicos con Python"
            },
            {
                "description": null,
                "id": 4,
                "speaker": [],
                "time": "17:30",
                "title": "Lightning talks"
            }
        ],
        "2014-10-23": [
            {
                "description": "<p>Curso-taller de Python orientado a estudiantes, ingenieros e investigadores.</p>",
                "id": 40,
                "speaker": [
                    12
                ],
                "time": "10:00",
                "title": "Introducci\u00f3n a Python para ciencias e ingenier\u00edas"
            },
            {
                "description": null,
                "id": 41,
                "speaker": [],
                "time": "11:00",
                "title": "Break"
            },
            {
                "description": "<p>Curso-taller de Python orientado a estudiantes, ingenieros e investigadores.</p>",
                "id": 42,
                "speaker": [
                    12
                ],
                "time": "11:30",
                "title": "Introducci\u00f3n a Python para ciencias e ingenier\u00edas"
            },
            {
                "description": null,
                "id": 13,
                "speaker": [],
                "time": "13:00",
                "title": "Lunch"
            },
            {
                "description": null,
                "id": 43,
                "speaker": [],
                "time": "14:00",
                "title": "Keynote"
            },
            {
                "description": null,
                "id": 44,
                "speaker": [],
                "time": "15:00",
                "title": "Open Debate"
            }
        ],
        "2014-10-24": [
            {
                "description": "<p>Curso-taller de Python orientado a estudiantes, ingenieros e investigadores.</p>",
                "id": 45,
                "speaker": [
                    12
                ],
                "time": "10:00",
                "title": "Introducci\u00f3n a Python para ciencias e ingenier\u00edas"
            },
            {
                "description": null,
                "id": 46,
                "speaker": [],
                "time": "11:00",
                "title": "Break"
            },
            {
                "description": "<p>Curso-taller de Python orientado a estudiantes, ingenieros e investigadores.</p>",
                "id": 47,
                "speaker": [
                    12
                ],
                "time": "11:30",
                "title": "Introducci\u00f3n a Python para ciencias e ingenier\u00edas"
            },
            {
                "description": null,
                "id": 14,
                "speaker": [],
                "time": "13:00",
                "title": "Lunch"
            },
            {
                "description": null,
                "id": 48,
                "speaker": [],
                "time": "14:00",
                "title": "Open Debate"
            },
            {
                "description": null,
                "id": 50,
                "speaker": [],
                "time": "15:00",
                "title": "Tutorial"
            },
            {
                "description": null,
                "id": 51,
                "speaker": [],
                "time": "18:00",
                "title": "Open Debate"
            }
        ]
    },
    "location": {
        "address": "Rondeau 29, Bah\u00eda Blanca, Pcia. de Buenos Aires, Argenitna",
        "latitude": -38.717208,
        "longitude": -62.269247,
        "name": "Centro Hist\u00f3rico Cultural de la Universidad Nacional del Sur"
    },
    "speakers": [
        {
            "description": "",
            "id": 3,
            "title": "Gustavo Grieco"
        },
        {
            "description": "",
            "id": 4,
            "title": "Nahuel Defoss\u00e9"
        },
        {
            "description": "<p>I'm a Software Developer since I was twenty. I worked in a lot of proyects using different technologies like Java, Python, Javascript etc... I learned Python first for fun and I adopted as my first programming language for it's simplicity. I study Computer Science in UBA and my Master Thesis is about Speech Recognition. I like running and swimming too.</p>",
            "id": 5,
            "title": "Fernando Bugni"
        },
        {
            "description": "<p>Juan B. Cabral recibi\u00f3 su t\u00edtulo de Ingeniero en Sistemas de Informaci\u00f3n de la Universidad Tecnol\u00f3gica Nacional - Facultad Regional C\u00f3rdoba. Actualmente se desempe\u00f1a como Ingeniero de Software Senior en la empresa Liricus y como investigador en el proyecto de I+D sobre Data Mining en la UTN-FRC. Adem\u00e1s de haber publicado trabajos sobre el tema, ha coordinado varias conferencias nacionales e internacionales sobre programaci\u00f3n. Recientemente ha comenzado a trabajar hacia su doctorado, estudiando t\u00e9cnicas de data mining sobre datos astrof\u00edsicos, en conjunto con el Instituto de Astronom\u00eda Te\u00f3rica y Experimental dependiente del CONICET.</p>",
            "id": 8,
            "title": "Juan Cabral"
        },
        {
            "description": "<p>Ingeniero en Computaci\u00f3n por la Universidad Nacional de C\u00f3rdoba. Es experto en el lenguaje de programaci\u00f3n Python y en tecnolog\u00edas web. Activo divulgador de Python y el software libre en el ambiente acad\u00e9mico y la ingeniera. </p>\n<p>En 2012 fund\u00f3, junto al Dr. Mart\u00edn Cismondi la empresa Phasety, siendo incubados en la misma Universidad. Phasety suma la trayectoria cient\u00edf\u00edca del Dr. Cismondi en modelado termodin\u00e1mico y la experienca de Gait\u00e1n en ingenier\u00eda de software para volcarlas en herramientas de simulaci\u00f3n, principalmente destinadas el sector de hidrocarburos. Tambi\u00e9n brindan consultor\u00edas y capacitaciones para el sector acad\u00e9mico y la industria. </p>\n<p>http://mgaitan.github.io\nhttp://phasety.com</p>",
            "id": 12,
            "title": "Mart\u00edn Gait\u00e1n"
        },
        {
            "description": "",
            "id": 16,
            "title": "Andr\u00e9s Cintas"
        },
        {
            "description": "<p>I'm a Chemical Engineering student in <a href=\"http://frre.utn.edu.ar/\">Universidad Tecnologica Nacional - FRRe</a>. Concurrently using python to research about Fluids Mechanics and Large Eddy Simulation (LES)</p>",
            "id": 7,
            "title": "Agustin Ferrario"
        },
        {
            "description": "<p>Desarrollador de Software con m\u00e1s de 5 a\u00f1os de experiencia. </p>\n<ul>\n<li>Hace ya un par de a\u00f1os que me encuentro desarrollando casi exclusivamente en Python. </li>\n<li>Me recib\u00ed de Licenciado en Ciencias de la Computaci\u00f3n (FCEyN-UBA) presentando mi tesis (desarrollada completamente en Python): <em>\"Detecci\u00f3n y Reconocimiento de las Se\u00f1as del Juego del Truco en Tiempo Real\"</em> <a href=\"http://www.dc.uba.ar/inv/grupos/imagenes/cast/TesisAven\" title=\"Detecci\u00f3n y Reconocimiento de las Se\u00f1as del Juego del Truco en Tiempo Real\">[pdf]</a>. </li>\n<li>Actualmente trabajo en la empresa <a href=\"http://www.hexacta.com/\" title=\"Hexacta\">Hexacta</a> desarrollando un proyecto de Simulaci\u00f3n de Redes de Fibra \u00d3ptica.</li>\n</ul>",
            "id": 11,
            "title": "Santiago Avenda\u00f1o"
        },
        {
            "description": "<p>\ufeff<strong>Background</strong></p>\n<p>Dami\u00e1n Avila es un <em>Data Scientist</em>, desarrollador-programador Python/JS y, antiguamente, Bioqu\u00edmico-Inmun\u00f3logo, egresado de la U.N.L.P, Buenos Aires, Argentina. </p>\n<p>Sus principales \u00e1reas de inter\u00e9s son: <em>Data Science</em>, <em>Visualizaciones</em>, y el proyecto <em>Jupyter (IPython)</em> y sus proyectos relacionados. Dami\u00e1n utiliza Python como su principal herramienta computacional, pero tambi\u00e9n tiene experiencia en otros lenguajes de programaci\u00f3n tales como Javascript (HTML-CSS) y Coffeescript.</p>\n<p>En el \u00e1rea del <em>c\u00f3digo abierto</em>, \u00e9l ha contribuido en m\u00faltiples proyectos de alto impacto, siendo reconocido como <em>core developer</em> de los proyectos Jupyter(IPython), Nikola y Bokeh. Tambi\u00e9n ha iniciado proyectos de c\u00f3digo abierto propios, tales como el <em>IPython plugin for NINJA-IDE</em>, <em>vIPer</em> y <em>RISE</em> (RJSE, una extensi\u00f3n para presentaciones <em>vivas</em> en el notebook de Jupyter).</p>\n<p>Dami\u00e1n ha presentado charlas, tutoriales y posters en conferencias nacionales e internacionales. \u00c9l es miembro de <em>Python Argentina</em>, <em>Scientific Python Argentina</em> y el <em>Quantitative Finance Club</em>. Actualmente, trabaja como desarrollador <em>full-time</em> para Continuum Analytics.</p>\n<p>Para m\u00e1s informaci\u00f3n:</p>\n<ul>\n<li>Perfil en <em>GitHub</em>: <a href=\"https://github.com/damianavila\">https://github.com/damianavila</a></li>\n<li>Portfolio: <a href=\"http://www.damian.oquanta.info/portfolio/portfolio.slides.html\">http://www.damian.oquanta.info/portfolio/portfolio.slides.html</a></li>\n<li>Blog: <a href=\"http://www.damian.oquanta.info/\">http://www.damian.oquanta.info/</a></li>\n</ul>\n<p>Referencias:</p>\n<p><strong>Organizaciones</strong></p>\n<ul>\n<li><a href=\"http://python.org.ar/\">http://python.org.ar/</a></li>\n<li><a href=\"http://groups.google.com/forum/?fromgroups#!forum/sci-pyar\">http://groups.google.com/forum/?fromgroups#!forum/sci-pyar</a></li>\n<li><a href=\"http://quantfinanceclub.com/\">http://quantfinanceclub.com/</a></li>\n</ul>\n<p><strong>Videos</strong></p>\n<ul>\n<li>\n<p>English</p>\n<ul>\n<li>Scipy 2014 <a href=\"https://www.youtube.com/watch?v=sZBKruEh0jI\">https://www.youtube.com/watch?v=sZBKruEh0jI</a></li>\n<li>SciPy 2013 <a href=\"http://www.youtube.com/watch?v=rBS6hmiK-H8\">http://www.youtube.com/watch?v=rBS6hmiK-H8</a></li>\n<li>SciPy 2013 <a href=\"http://www.youtube.com/watch?v=NVf_giNcNro\">http://www.youtube.com/watch?v=NVf_giNcNro</a></li>\n<li>PyConUS 2012 <a href=\"http://us.pycon.org/2012/schedule/presentation/513/\">http://us.pycon.org/2012/schedule/presentation/513/</a></li>\n<li>PyConUS 2012 <a href=\"http://www.youtube.com/watch?v=MIAKOMzRl1I&amp;feature=plcp\">http://www.youtube.com/watch?v=MIAKOMzRl1I&amp;feature=plcp</a></li>\n</ul>\n</li>\n<li>\n<p>Spanish</p>\n<ul>\n<li>SciPyConAr 2013 <a href=\"http://www.youtube.com/watch?v=x1_LPVFsPIU\">http://www.youtube.com/watch?v=x1_LPVFsPIU</a></li>\n<li>SciPyConAr 2013 <a href=\"http://www.youtube.com/watch?v=l50KXv0-2vE\">http://www.youtube.com/watch?v=l50KXv0-2vE</a></li>\n<li>SciPyConAr 2013 <a href=\"http://www.youtube.com/watch?v=gLYCK0SuPoY\">http://www.youtube.com/watch?v=gLYCK0SuPoY</a></li>\n<li>PyCon Argentina 2012 <a href=\"http://www.youtube.com/watch?v=M-crhRKfsZU\">http://www.youtube.com/watch?v=M-crhRKfsZU</a></li>\n<li>PyCon Argentina 2013 <a href=\"http://www.youtube.com/watch?v=17DPZlKQDk8\">http://www.youtube.com/watch?v=17DPZlKQDk8</a></li>\n<li>PyCon Argentina 2013 <a href=\"http://www.youtube.com/watch?v=4-O5NZKD3hI\">http://www.youtube.com/watch?v=4-O5NZKD3hI</a></li>\n</ul>\n</li>\n</ul>",
            "id": 17,
            "title": "Dami\u00e1n Avila"
        },
        {
            "description": "<p>Python es mi favorito desde hace unos a\u00f1os, aunque tambi\u00e9n me gustan mucho Ruby y Lisp. Antes hice bastante desarrollo web y m\u00f3vil, y ahora estoy trabajando en una empresa donde hacemos todo en Python focalizado principalmente en inteligencia artificial y algunos temas relacionados. Fuera de la computaci\u00f3n me interesa cualquier cosa que me haga pensar un poco.</p>",
            "id": 19,
            "title": "Juan Pedro Fisanotti"
        }
    ],
    "when": {
        "date": "16:00:00Z1983/08/29"
    }
};

  return {
    data: function() {
      return data
    }
  }

});
