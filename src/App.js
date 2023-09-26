import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import HomePage from './components/pages/HomePage'
import NewsPage from './components/pages/NewsPage'
import ContactPage from './components/pages/ContactPage'
import AboutSchool from './components/pageСomponents/school/AboutSchool';
import Management from './components/pageСomponents/school/Management';
import Coach from './components/pageСomponents/school/Coach';
import Workout from './components/pageСomponents/school/Workout';
import Documents from './components/pageСomponents/school/Documents';
import Teams from './components/pageСomponents/school/Teams';
import Healp from './components/pageСomponents/school/Healp'
import Photo from './components/pageСomponents/media/Photo';
import Video from './components/pageСomponents/media/Video';
import Novosti1 from './components/pageСomponents/novosti/Novosti1';
import Info from './components/pageСomponents/novosti/Info';
import Info2 from './components/pageСomponents/novosti/Info2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<HomePage/>}/>
          <Route path='news' element={<NewsPage/>}/>
          <Route path='school/*'>
            <Route path='abaut' element={<AboutSchool/>}/>
            <Route path='managements' element={<Management/>}/> 
            <Route path='coach' element={<Coach/>}/> 
            <Route path='workout' element={<Workout/>}/>
            <Route path='documents' element={<Documents/>}/>
            <Route path='teams' element={<Teams/>}/>
            <Route path='help' element={<Healp/>}/> 
           </Route>
          <Route path='media/*'>
            <Route path='photo' element={<Photo/>}/>
            <Route path='video' element={<Video/>}/> 
          </Route>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='novosti_1' element={<Novosti1/>}/>
          <Route path='info' element={<Info/>}/>
          <Route path='info2' element={<Info2/>}/>
        </Route>
      </Routes> 
    </>
  );
}

export default App;
