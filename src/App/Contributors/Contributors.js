import React from 'react';
import './Contributors.css';

class Contributors extends React.Component {
  constructor(props) {
    super(props);
    props.setSubtitle(': Contributors');
  }
  
  render() {
    return (
      <div className='Contributors'>
        <div className='card'>
          <div className='subtitle'>A collaborative effort of</div>
          <div className='Contributors-people text'>
            Talia Baurer, Pippi Kessler, Luke Mayville, Sonia Alexander, Rachel Marcus, Jessica Rosenberg, David Mahfouda, Rebecca Holtz, Franny Silverman, Mariel/Michal Boyarsky, Rabbi Kerry Chaplin, Zahara Zahav, Talia Cooper, Emily Rogal, John Szymanski, Amla Saraf, Anna George, Jenny Koshner, Sarra Alpert Joanna Pickering, Emily Kim, Rosamund Grene, Noam Green, Paul Sperry-Fromm, Emma Rose Kates-Shaw, Abigail Johnson, Rachel Messer, Russell Jaffe, Zahara Zahav, Peyton Boughton, Rebecca Rosalita, Gabriella Zutrau, Abigail Virginia Wambaugh, Miriam Priven, Laurie Whartonm Sofia Pardillo, Della Kurzer-Zlotnick,Tara Dikeman, Liel Green, Jonah Spear, Emile Feldenzer, Jon Mørk-Jensen, Grigoriy Ruzis, and Alex Crist
          </div>
        </div>
      </div>
    );
  }
}

export default Contributors;