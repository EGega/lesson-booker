import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import style from './TeacherHome.module.css'
import students from '../../assets/students.jpg'
import classes from '../../assets/classes.jpg'
import books from '../../assets/books.jpg'
import videos from '../../assets/videos.jpg'
import administration from '../../assets/administration.jpg'
import review from '../../assets/review.jpg'
const Teacherhome = () => {
  return (
    <>
     <Navbar />
     <div className={style.container}>
        <div>
        <img src={students} alt="students" />
        <button>Students</button>
        </div>
        <div>
        <img src={classes} alt="classes" />
        <button>Classes</button>
        </div>
        <div>
        <img src={books} alt="books" />
        <button>Books</button>
        </div>
        <div>
        <img src={videos} alt="videos" />
        <button>Videos</button>
        </div>
        <div>
        <img src={administration} alt="administration" />
        <button>Admins</button>
        </div>
        <div>
        <img src={review} alt="review" />
        <button>Feedback</button>
        </div>
     </div>

    </>
  )
}

export default Teacherhome