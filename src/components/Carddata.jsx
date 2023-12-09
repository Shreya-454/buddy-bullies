import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'
const cardinfo = [
    {
    img: img1,
    title: 'ART COLLECTION',
    content: 'Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.'
    },
{
    img: img2,
    title: 'SPECIAL BULLIES',
    content: <><span className='fw-medium'>20 Buddybullies </span> &#123;out of 10k&#125; will have a very <span className='fw-medium'>special and ersonalized </span> resembling of <span className='fw-medium'> famous people who are into NFTs</span> &#123;those will be available after the minting&#125;.</>
    },
    {
    img: img3,
    title: 'BREEDING',
        content: <>Our <span className='fw-medium'>BuddyBullies</span> will not come alone, as we will announce the <span className='fw-medium'>breeding function</span>  after the minting and you will be able to get  <span className='fw-medium'>a PuppyBully</span> &#123; for free&#125;.</>
    },
{
    img: img4,
    title: 'DIGITALMARKETS',
    content: <><span className='fw-medium'>Communicate with all the
        digital markets</span>  available in the <span className='fw-medium'>Solana NFT</span> world  for getting our collection <span className='fw-medium'>successfully listed.</span></>
    
    },
{
    img: img5,
    title: 'MERCH',
    content: <>The team is <span className='fw-medium'>working on the future merch</span> thet will be available for the community members directly on our webpage.</>
    },
{
    img: img6,
    title: 'CHARITY',
    content: <>We will be giving <span className='fw-medium'>30% of the royalties</span>  to charity permanently and we will keep spending on marketing, promotions and partnership.<span className='fw-medium'>50% of the riyalties</span> will go back to the <span className='fw-medium'>community</span> as <span className='fw-medium'>rewards.</span></>
    }
]


const Carddata = () => {
    const info = cardinfo.map((cardinfo)=>(
        <div className='col-lg-4 col-md-6  mt-4'>
            <div class="buddy-card ">
                <img src={cardinfo.img} alt="img3" />
                <p className='ff-poppins fw-semibold fs-2lg lh-100 color-white pt-4'>{ cardinfo.title}</p>
                <p className='ff-poppins fw-normal fs-xs lh-150 op-7 color-white pt-2 max-w-347' >{ cardinfo.content}</p>
            </div>
        </div>
    ))
  return (
      <div className='bg-blue2 pt-5 pb-lg-5 pb-md-4 pb-2'>
          <div className="container">
              <div className="row">
                  {info}
              </div>
      </div>
    </div>
  )
}

export default Carddata
