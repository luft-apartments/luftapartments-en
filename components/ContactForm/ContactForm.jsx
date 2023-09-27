'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactDOM from 'react-dom';

import styles from './ContactForm.module.scss';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  datestart: '',
  dateend: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

export const ContactForm = () => {

  const [values, setValues] = useState(initialValues);

  const [fieldStates, setFieldStates] = useState({
    name: false,
    phone: false,
    email: false,
    datestart: false,
    dateend: false,
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
              <path d="M15 7L7.99998 14L4.99994 11M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className={styles.messageTextWrapper}>
              <h3 className={styles.messageTitle}>Thank you!</h3>
              <p className={styles.messageText}>I received your message and will contact you soon.</p>
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
              Your full name
            </label>
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>
          <div className={styles.inputWrapper}>
            <div
              className={styles.inputData}
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
                Phone
              </label>
              <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
            </div>

            <div
              className={styles.inputData}
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
                Email
              </label>
              <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div
              className={styles.inputData}
            >
              <Field
                className={styles.input}
                type="date"
                id="datestart"
                name="datestart"
                onFocus={() => setFieldStates({ ...fieldStates, datestart: true })}
                onBlur={(e) => handleFieldChange('datestart', e.target.value)}
              />
              <label
                htmlFor="datestart"
                className={`${styles.dateLabel} ${fieldStates.datestart || initialValues.datestart ? styles.focused : ''}`}
              >
                Arrival date
              </label>
              <ErrorMessage name="datestart" component="div" className={styles.errorMessage} />
            </div>

            <div
              className={styles.inputData}
            >
              <Field
                className={styles.input}
                type="date"
                id="dateend"
                name="dateend"
                onFocus={() => setFieldStates({ ...fieldStates, dateend: true })}
                onBlur={(e) => handleFieldChange('dateend', e.target.value)}
              />
              <label
                htmlFor="dateend"
                className={`${styles.dateLabel} ${fieldStates.dateend || initialValues.dateend ? styles.focused : ''}`}
              >
                Departure date
              </label>
              <ErrorMessage name="dateend" component="div" className={styles.errorMessage} />
            </div>
          </div>
          <div
            className={`${styles.inputData} ${styles.textarea}`}
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
              Message
            </label>
            <ErrorMessage name="message" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.buttonBlock}>
            <button
              className={styles.button}
              type="submit"
            >
              Send
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};