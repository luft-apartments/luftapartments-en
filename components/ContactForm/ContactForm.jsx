'use client'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './ContactForm.module.scss';

const initialValues = {
  name: '',
  // surname: '',
  phone: '',
  email: '',
  apartments: '',
  number: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Pflichtfeld'),
  phone: Yup.string().required('Pflichtfeld'),
  email: Yup.string().email('Ungültige E-Mail-Adresse').required('Pflichtfeld'),
  checkin: Yup.date().required('Pflichtfeld'),
  checkout: Yup.date().required('Pflichtfeld'),
  apartments: Yup.string().required('Pflichtfeld'),
  number: Yup.string().required('Pflichtfeld'),
  message: Yup.string().required('Pflichtfeld'),
});

export const ContactForm = ({ onSubmitSuccess }) => {

  const [values, setValues] = useState(initialValues);

  const [fieldStates, setFieldStates] = useState({
    name: false,
    // surname: false,
    phone: false,
    email: false,
    checkin: '',
    checkout: '',
    apartments: false,
    number: false,
    message: false,
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setFieldStates((prevFieldStates) => ({
      ...prevFieldStates,
      [fieldName]: !!value.trim(),
    }));
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('/api/contact', values); // Отправляем данные формы на сервер
      // Здесь вы можете добавить код для обработки успешной отправки, например, очистка формы или вывод сообщения пользователю
      console.log('Форма успешно отправлена!');
      resetForm(); // Сбрасываем значения полей формы к исходным значениям
      setValues(initialValues); // Сбрасываем значения полей формы в локальном состоянии
      setIsMessageSent(true);
      setIsMessageVisible(true);

      // Call the onSubmitSuccess callback after successful form submission
      if (isMessageSent) {
        onSubmitSuccess();
      }

      setTimeout(() => {
        setIsMessageVisible(false);
      }, 5000); // Hide the message popup after 5 seconds
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      // Здесь вы можете добавить код для обработки ошибки отправки, например, вывод сообщения пользователю
    }
  };

  // Создаем портал для всплывающего окна
  const MessagePopup = ({ isOpen }) => {
    if (!isMessageVisible) return null;
    // if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className={styles.popupContainer}>
        <div className={styles.messagePopup}>
          <div className={styles.messageContent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 20 20" fill="none">
              <path d="M15 7L7.99998 14L4.99994 11M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ff7300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className={styles.messageTextWrapper}>
              <h3 className={styles.messageTitle}>Danke schön!</h3>
              <p className={styles.messageText}>Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.</p>
            </div>
            {/* <button onClick={closeMessagePopup}>Close</button> */}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className={styles.formWrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Field
              className={styles.input}
              type="text"
              id="name"
              name="name"
              onFocus={() => setFieldStates({ ...fieldStates, name: true })}
              onBlur={(e) => handleFieldChange('name', e.target.value)}
            />
            <label
              htmlFor="name"
              className={`${styles.label} ${fieldStates.name || initialValues.name ? styles.focused : ''}`}
            >
              Name
            </label>
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

          {/* <div className={styles.inputWrapper}>
            <div className={styles.inputData}>
              <Field
                className={styles.input}
                type="text"
                id="surname"
                name="surname"
                onFocus={() => setFieldStates({ ...fieldStates, surname: true })}
                onBlur={(e) => handleFieldChange('surname', e.target.value)}
              />
              <label
                htmlFor="surname"
                className={`${styles.label} ${fieldStates.surname || initialValues.surname ? styles.focused : ''}`}
              >
                Nachname
              </label>
              <ErrorMessage name="surname" component="div" className={styles.errorMessage} />
            </div>
          </div> */}

          <div className={styles.inputWrapper}>
            <div
              className={styles.inputData}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Field
                className={styles.input}
                type="text"
                id="phone"
                name="phone"
                onFocus={() => setFieldStates({ ...fieldStates, phone: true })}
                onBlur={(e) => handleFieldChange('phone', e.target.value)}
              />
              <label
                htmlFor="phone"
                className={`${styles.label} ${fieldStates.phone || initialValues.phone ? styles.focused : ''}`}
              >
                Telefonnummer
              </label>
              <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
            </div>

            <div
              className={styles.inputData}
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <Field
                className={styles.input}
                type="email"
                id="email"
                name="email"
                onFocus={() => setFieldStates({ ...fieldStates, email: true })}
                onBlur={(e) => handleFieldChange('email', e.target.value)}
              />
              <label
                htmlFor="email"
                className={`${styles.label} ${fieldStates.email || initialValues.email ? styles.focused : ''}`}
              >
                E-mail
              </label>
              <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.inputData} data-aos="fade-up" data-aos-duration="1600">
              <Field
                type="date"
                id="checkin"
                name="checkin"
                placeholder=""
                className={styles.inputDate}
                onFocus={() => setFieldStates({ ...fieldStates, checkin: true })}
                onBlur={(e) => handleFieldChange('checkin', e.target.value)}
              />
              <label
                htmlFor="checkin"
                className={`${styles.label} ${styles.dateLabel}`}
              >
                Einreise
              </label>
              <ErrorMessage name="checkin" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.inputData} data-aos="fade-up" data-aos-duration="1600">
              <Field
                type="date"
                id="checkout"
                name="checkout"
                onFocus={() => setFieldStates({ ...fieldStates, checkout: true })}
                onBlur={(e) => handleFieldChange('checkout', e.target.value)}
              />
              <label
                htmlFor="checkout"
                className={`${styles.label} ${styles.dateLabel}`}
              >
                Ausreise
              </label>
              <ErrorMessage name="checkout" component="div" className={styles.errorMessage} />
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.inputData} data-aos="fade-up" data-aos-duration="1800">
              <div className={styles.selectWrapper}>
                <label
                  htmlFor="apartments"
                  className={`${styles.label} ${fieldStates.apartments || initialValues.apartments ? styles.focused : ''}`}
                >
                  Wunschapartment
                </label>
                <Field
                  as="select"
                  id="apartments"
                  name="apartments"
                  onFocus={() => setFieldStates({ ...fieldStates, apartments: true })}
                  onBlur={(e) => handleFieldChange('apartments', e.target.value)}
                  className={styles.select}
                >
                  <option value=""></option>
                  <option value="Apartment 2A">Apartment 2A</option>
                  <option value="Apartment 3A">Apartment 3A</option>
                  <option value="Apartment 1B">Apartment 1B</option>
                  <option value="Apartment 2B">Apartment 2B</option>
                  <option value="Apartment 3B">Apartment 3B</option>
                </Field>
                <ErrorMessage name="apartments" component="div" className={styles.errorMessage} />
              </div>
            </div>
            <div className={styles.inputData} data-aos="fade-up" data-aos-duration="1800">
              <div className={styles.selectWrapper}>
                <label
                  htmlFor="number"
                  className={`${styles.label} ${fieldStates.number || initialValues.number ? styles.focused : ''}`}
                >
                  Anzahl der Personen
                </label>
                <Field
                  as="select"
                  id="number"
                  name="number"
                  onFocus={() => setFieldStates({ ...fieldStates, number: true })}
                  onBlur={(e) => handleFieldChange('number', e.target.value)}
                  className={styles.select}
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="Mehr als 5">Mehr als 5</option>
                </Field>
                <ErrorMessage name="number" component="div" className={styles.errorMessage} />
              </div>
            </div>
          </div>

          <div
            className={`${styles.inputData} ${styles.textarea}`}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Field
              as="textarea"
              id="message"
              name="message"
              onFocus={() => setFieldStates({ ...fieldStates, message: true })}
              onBlur={(e) => handleFieldChange('message', e.target.value)}
            />
            <label
              htmlFor="message"
              className={`${styles.labelTextarea} ${fieldStates.message || initialValues.message ? styles.focused : ''}`}
            >
              Ihre Nachricht
            </label>
            <ErrorMessage name="message" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.buttonBlock}>
            <button
              className={styles.button}
              type="submit"
            >
              Anfrage senden
            </button>
          </div>
        </Form>
      </Formik>
      <MessagePopup isOpen={isMessageSent} />
    </div>
  );
};