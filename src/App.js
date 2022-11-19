/* eslint-disable jsx-a11y/alt-text */
import {Carousel,Modal,Button,Navbar,Dropdown,Avatar} from 'flowbite-react'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
        <div className="bg-gray-200 min-h-screen p-4 ">
            {/* navbar */}
            <Navbar
              fluid={true}
              rounded={true}
            >
              <Navbar.Brand href="https://flowbite.com/">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Flowbite 16:39
                </span>
              </Navbar.Brand>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={<Avatar alt="User settings" img="images/m1.jpg" rounded={true}/>}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Earnings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <Navbar.Collapse>
                <Navbar.Link
                  href="/navbars"
                  active={true}
                >
                  Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                  Contact
                </Navbar.Link>
              </Navbar.Collapse>
            </Navbar>

          {/* caroussel */}
         <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-4">
            <Carousel slideInterval={50000}>
              <img
                src="assets/a1.jpg"
                alt="..."
              />
              <img
                src="assets/a2.jpg"
                alt="..."
              />
              <img
                src="assets/a3.jpg"
                alt="..."
              />
             
            </Carousel>
          </div>

            {/* modal */}
            <div className='my-4'>
                <Button onClick={()=>setShow(!show)} className='bg-emerald-800 hover:bg-emerald-400' >
                  Toggle modal
                </Button>
                <Modal
                  show={show}
                  onClose={()=>setShow(!show)}
                >
                  <Modal.Header>
                    Terms of Service
                  </Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={()=>setShow(!show)}>
                      I accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={()=>setShow(!show)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>


          {/* gallery */}
            <div className="my-4 bg-pink-300  ">
              <div className=" p-3 grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <img className='rounded-lg  ' src="assets/a1.jpg" />
                <img className='rounded-lg' src="assets/a2.jpg" />
                <img className='rounded-lg' src="assets/a3.jpg" />
                <img className='rounded-lg  ' src="assets/a4.jpg" />
              </div>
            </div>

 

        </div>
    </div>
  );
}

export default App;






 
