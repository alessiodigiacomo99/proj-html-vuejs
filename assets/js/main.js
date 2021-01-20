let root = new Vue ({
    el: '#root',
    data:{
        partners:[
            {
                img: '01'
            },
            {
                img: '02'
            },
            {
                img: '03'
            },
            {
                img: '04'
            },
            {
                img: '05'
            },
            {
                img: '06'
            },
            {
                img: '07'
            },
        ],
        courses:[
            {
                img: 'course-02-480x298.jpg',
                costo: '$40.00',
                info: 'Learning to Write as a Professional Author',
                lezioni: 20,
                studenti: 50,
            },
            {
                img: 'stock-full-hd-03-480x298.jpg',
                costo: 'Free',
                info: 'Customer-centric Info-Tech Strategies',
                lezioni: 24,
                studenti: 769,
            },
            {
                img: 'stock-full-hd-04-480x298.jpg',
                costo: '$19.00',
                info: 'Open Programming Courses for Everyone: Python',
                lezioni: 17,
                studenti: 62,
            },
            {
                img: 'stock-full-hd-06-480x298.jpg',
                costo: '$26.00',
                info: 'Accademic Listening and Note-taking',
                lezioni: 14,
                studenti: 67,
            },
            {
                img: 'course-featured-image-01-480x298.jpg',
                costo: '$39.00',
                info: 'Master jQuery in a Short Period of Time',
                lezioni: 6,
                studenti: 51,
            },
            {
                img: 'stock-full-hd-05-480x298.jpg',
                costo: '$59.00',
                info: 'Introduction to Javascript for Beginners',
                lezioni: 14,
                studenti: 76,
            },
            
        ],
        recensioni:[
            {
                titolo:"It's a choice of quality for people with special needs",
                p:"I'm a very strict person so I require everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me",
                img:'01',
                nome:'florence themes',
                lavoro:'/Multimedia Admin',
            },
            {
                titolo:'High level of efficiency and scientific teaching methods',
                p:'I am free to lear at m own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.',
                img:'02',
                nome:'mina hollace',
                lavoro:'/Freelancer',
            },
            {
                titolo:'Professional team of specialist and passionate mentors at reach',
                p:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                img:'03',
                nome:'madley pondor',
                lavoro:'/IT Specialist',
            },
            {
                titolo:'Professional team of specialist and passionate mentors at reach',
                p:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                img:'04',
                nome:'pippo pondor',
                lavoro:'/Developer',
            }
        ],
        counter: 0,
    },
    methods:{
        next(){
            if(this.counter == (this.recensioni.length - 1)){
                this.counter = 0;
            }else(this.counter++)
        },
        prev(){
            if(this.counter == 0){
                this.counter = (this.recensioni.length - 1);
            }else(this.counter--)
        }
    }
})