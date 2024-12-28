import { useState } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
//images
import logo from './assets/Javohir.jpg'



//icons 
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { Form, Modal } from 'react-bootstrap';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function App() {

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //post methos

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const bot_token = "7164346426:AAE4jQWN5JDWKrmBe4QEClOuhHoyygdWC-U"
    const bot_id = "1896479864"

    const xabar = `
      Name : ${name}
      Number: ${number}
      Xabar: ${message}
    `

    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: bot_id,
        text: xabar
      })
    })
      .then((response) => response.json())
      .then(res => {
        if (res.ok) {
          setNumber("")
          setName("")
          setMessage("")
          handleShow()
        }
        else {
          alert("xabar jo'natilmadi")
        }
      })
      .catch(err => {
        console.log(err)
        alert("Xabar Jo'natilmadi")
      })
      .finally(() => {
        setIsLoading(false)
      })

  }

  return (
    <>
      <div className=' rounded box'>
        <div className='logo-image mx-ato mb-3'>
          <img src={logo} className='img-fluid rounded-pill' alt="logo image" />
        </div>
        <div className='bio-btns d-flex flex-column flex-md-row justify-content-center'>
          <a target='_blank' href="https://t.me/Suvonov_Javoh1r" className='btn btn-primary d-flex align-items-center'><PiTelegramLogoBold /><p className='mb-0 ms-1'>Telegram</p></a>
          <a target='_blank' href="https://www.instagram.com/suvonov_javohir1/" className='btn btn-danger d-flex align-items-center'><FaInstagram /><p className='mb-0 ms-1'>Instagram</p></a>
          <a target='_blank' href="tel:+998771232904" className='btn btn-success d-flex align-items-center'><BsFillTelephoneFill /><p className='mb-0 ms-1'>Telefon</p></a>
          <a target='_blank' href="https://www.linkedin.com/in/javohir-suvonov-a98925303/" className='btn btn-info d-flex align-items-center'><RiLinkedinFill style={{ color: "white" }} /><p className='mb-0 ms-1 text-light'>LinkedIn</p></a>
          <a target='_blank' rel="noopener noreferrer" href="mailto:suvonovjavohir625@gmail.com" className='btn btn-warning d-flex align-items-center'>
            <BiLogoGmail style={{ color: "white" }} />
            <p className='mb-0 ms-1 text-light'>Email</p>
          </a>
          <a target='_blank' href="https://github.com/javohir-tech" className='btn btn-dark d-flex align-items-center'><FaGithub style={{ color: "white" }} /><p className='mb-0 ms-1'>GitHUb</p></a>
        </div>
        <div className='text-warning mt-3'>
          <h2 className='mb-0'>Agar bog'lana olmasangiz habar qoldiring </h2>
        </div>
        <Form className='form text-white' onSubmit={handleChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ismingiz</Form.Label>
            <Form.Control onChange={(e) => setName(e?.target?.value)} value={name} type="text" placeholder="Ismingiz" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefon Raqam</Form.Label>
            <Form.Control onChange={(e) => setNumber(e?.target?.value)} value={number} type="number" placeholder="Raqamingiz" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Xabar Qoldiring</Form.Label>
            <Form.Control onChange={(e) => setMessage(e?.target?.value)} value={message} as="textarea" rows={3} required placeholder='Xabaringizni qoldiring' />
          </Form.Group>
          <button className='btn btn-primary'>{isLoading ? <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> : "Yuborish"}</button>
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xabar Jo'natildi </Modal.Title>
        </Modal.Header>
        <Modal.Body>Siz bilan Tez orada bog'lanaman</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
