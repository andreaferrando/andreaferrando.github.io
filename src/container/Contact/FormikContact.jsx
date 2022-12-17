import React, { useState } from 'react'
import {isMobile} from 'react-device-detect';
import './Contact.scss'
import IoButton from '../../components/IoButton/IoButton.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

const Contact = () => {
  const [error, setError] = useState("");
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    axios.post("https://sheet.best/api/sheets/1b2cb021-d181-43ab-b322-6d121d150220", values).then(response => {
      if (response.status === 200) {
        setError('false');
      }
      else {
        setError('true');
      }
      onSubmitProps.setSubmitting(false);
    })
    onSubmitProps.resetForm()
  }

  const validate = values => {
    let errors = {}

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.subject) {
      errors.subject = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  }
  
  return (
    <>
      <section data-scroll-index="4" id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {isMobile ? <div className='space' />
              :
              <div className="contact__infos text-center">
                <a href="https://open.spotify.com/artist/1FAJs3Ofs68Skmy2M6T3Lz?si=l3jGhsyWTsC-IrmjqgPPFg" target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify"></i></a>
                <a href="https://music.apple.com/it/artist/io/1579754734" target="_blank" rel="noreferrer"><i className="fa-brands fa-apple"></i></a>
                <a href="https://www.youtube.com/channel/UCjH6CUCoc-Epkq1rtB43agw" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/andrea_ferrando/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:andrea.ferrando@icloud.com"><i className="fas fa-envelope"></i></a>
              </div>
              }
            </div>
          </div>
          <div className="row contact__form">
            <div className="col-lg-6">
              <div className="contact__form-1">
                <div className='form-title-container'>
                  <h6>Hey, wanna collab? Or just leave me a message</h6>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
                  {formik => {
                    return (
                      <Form id="contact-form" method="POST">
                        <div className="row gx-3 gy-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              {/* <label className="form-label">Full name</label> */}
                              <Field name="name" id="name" placeholder="Name *" className={!formik.errors.name ? "form-control ok" : "form-control error"} type="text" required />
                              <ErrorMessage name="name" component='span' />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              {/* <label className="form-label">Your Email</label> */}
                              <Field name="email" id="email" placeholder="Email *" className={!formik.errors.email ? "form-control ok" : "form-control error"} type="email" required />
                              <ErrorMessage name="email" component='span' />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              {/* <label className="form-label">Subject</label> */}
                              <Field name="subject" id="subject" placeholder="Subject *" className={!formik.errors.subject ? "form-control ok" : "form-control error"} type="text" required />
                              <ErrorMessage name="subject" component='span' />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              {/* <label className="form-label">Your message</label> */}
                              <Field as="textarea" name="message" id="message" placeholder="Your message *" rows="4" className={!formik.errors.message ? "form-control ok" : "form-control error"} required></Field>
                              <ErrorMessage name="message" component='span' />
                            </div>
                          </div>
                          <div className="response__message">
                            <div className={error === "false" ? "message__success text-center" : "message__success text-center d-none"} role="alert">
                              <span>Message Sent Successfully.</span>
                            </div>
                            <div className={error === "true" ? "message__error text-center" : "message__error text-center d-none"} role="alert">
                              <span>Something Went Wrong!</span>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form__button text-center">
                            <div>
                                <IoButton
                                  title = "SEND MESSAGE"
                                  disabled={!formik.isValid || formik.isSubmitting}
                                  type="submit"
                                  log="form submitted"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )
                  }}

                </Formik>
              </div>
            </div>
            {/* <div className="col-lg-5 col-xl-4 m-auto">
              <div className="text-center contact__image">
                <img src={images.chat} title="" alt="" />
              </div>
              <h5>Social Media  </h5>
              <div className="contact__infos text-center">
                  <a href="/"><i className="fa-brands fa-github"></i></a>
                  <a href="/"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact