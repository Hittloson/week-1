import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  const [brandSectionOpen, setBrandSectionOpen] = useState(true); // State for BRAND section
  const [aromasSectionOpen, setAromasSectionOpen] = useState(true); // State for AROMAS section
  const [brandSectionOpen2, setBrandSectionOpen2] = useState(true);

  const toggleBrandSection = () => {
    setBrandSectionOpen(!brandSectionOpen);
  };

  const toggleAromasSection = () => {
    setAromasSectionOpen(!aromasSectionOpen);
  };
  const toggleBrandSection2 = () => {
    setBrandSectionOpen2(!brandSectionOpen2);
  };
  return (
    <>
      <div className='sidebar-container ml-8  pl-5 pr-5 pb-5 mb-5'>
        <h1 >Filters</h1>
        <div className='flex flex-col'>
          <div className='siderbar-headers flex gap-20 pl-0' onClick={toggleBrandSection}>
            <h2 className='pl-0'>BRAND</h2>
            <FontAwesomeIcon icon={faAngleUp} className={`p-5 ${brandSectionOpen ? 'rotate' : ''}`}/>
          </div>
          {brandSectionOpen && (
          <section className='flex flex-col relative '>
            <div className='flex gap-1 '>
            <label >
              <input type='checkbox' className='mr-1'></input>
              MEN</label>
            </div>
            <div className='flex gap-1'>
            <label className=''>
              <input type='checkbox' className='mr-1'></input>
              WOMEN</label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              UNISEX
              </label>
            </div>
          </section>
          )}
        </div>

        <div className='flex flex-col'>
          <div className='siderbar-headers flex gap-20 pl-0' onClick={toggleBrandSection2}>
            <h2 className='pl-0'>BRAND</h2>
            <FontAwesomeIcon icon={faAngleUp} className={`p-5 ${brandSectionOpen2 ? 'rotate' : ''}`}/>
          </div>
          {brandSectionOpen2 && (
          <section className='flex flex-col relative '>
            <div className='flex gap-1 '>
            <label >
              <input type='checkbox' className='mr-1'></input>
              DIOR</label>
            </div>
            <div className='flex gap-1'>
            <label className=''>
              <input type='checkbox' className='mr-1'></input>
              CELVIN KLEIN</label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              CHANNEL
              </label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              VERSACE
              </label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              DOLCE & GABBANA
              </label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              CARTIER
              </label>
            </div>
          </section>
          )}
        </div>
        <div className='flex flex-col'>
          <div className='siderbar-headers flex gap-20 pl-0' onClick={toggleAromasSection}>
            <h2 className='pl-0'>AROMAS</h2>
            <FontAwesomeIcon icon={faAngleUp} className={`p-5 ${aromasSectionOpen? 'rotate' : ''}`}/>
          </div>
          {aromasSectionOpen &&(

          <section className='flex flex-col relative '>
            <div className='flex gap-1 '>
            <label >
              <input type='checkbox' className='mr-1'></input>
              FLORAL</label>
            </div>
            <div className='flex gap-1'>
            <label className=''>
              <input type='checkbox' className='mr-1'></input>
              CITRUS</label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              ORIENTAL
              </label>
            </div>
          </section>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar