
import './App.css';
import img from "../src/Screenshot .png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>
      <div id='backpage'>
        <div id="main">
          <div id="img">
            <img id="img1" src={img} />

          </div>

          <div id="news">
            <div id="row1">
              <div id='box1'>
              <div className='header'>
              <div>
                <button className='btn'>Decode</button>
              </div>
              <div>
              <FontAwesomeIcon className="share" icon={faShare} />
              </div>
              <div>
              <FontAwesomeIcon className='menu' icon={faEllipsisVertical} />
              </div>

              </div>
              <div className='title'>
              How an Ad in the Local Paper Led Bernie Taupin to Elton John
              </div>
              <div className='para'>
              Bernie Taupin, 73, is an Oscar-winning lyricist best known for his songwriting partnership with Elton John... 
              </div>
              <div className='by'>
                -By mint news | 2 days ago
              </div>

              </div>
              <div id='box2'>
              <div className='header'>
              <div>
                <button className='btn'>Decode</button>
              </div>
              <div>
              <FontAwesomeIcon className="share" icon={faShare} />
              </div>
              <div>
              <FontAwesomeIcon className='menu' icon={faEllipsisVertical} />
              </div>

              </div>
              <div className='title'>
              Libya: Over 5300 presumed dead after two dams collapse due to heavy rains
              </div>
              <div className='para'>
              In Northeastern Libya two dams collapsed due to heavy rainfall, further inundating...
              </div>
              <div className='by'>
                -By mint news | 2 days ago
              </div>

              </div>
            </div>
            <div id='row2'>
            <div id='box3'>
              <div className='header'>
              <div>
                <button className='btn'>Decode</button>
              </div>
              <div>
              <FontAwesomeIcon className="share" icon={faShare} />
              </div>
              <div>
              <FontAwesomeIcon className='menu' icon={faEllipsisVertical} />
              </div>

              </div>
              <div className='title'>
              Kim Jong Un, Putin likely to hold summit for arms deal today
              </div>
              <div className='para'>
              North Korean leader Kim Jong Un, who is on a visit to Russia, is expected to hold a summit...
              </div>
              <div className='by'>
                -By mint news | 2 days ago
              </div>

              </div>
              <div id='box4'>
              <div className='header'>
              <div>
                <button className='btn'>Decode</button>
              </div>
              <div>
              <FontAwesomeIcon className="share" icon={faShare} />
              </div>
              <div>
              <FontAwesomeIcon className='menu' icon={faEllipsisVertical} />
              </div>

              </div>
              <div className='title'>
              How an Ad in the Local Paper Led Bernie Taupin to Elton John
              </div>
              <div className='para'>
              Bernie Taupin, 73, is an Oscar-winning lyricist best known for his songwriting partnership with Elton John... 
              </div>
              <div className='by'>
                -By mint news | 2 days ago
              </div>

              </div>

            </div>


          </div>

        </div>
      </div>
    </>
  );
}

export default App;
