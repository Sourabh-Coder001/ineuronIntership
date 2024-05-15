import React from 'react';
import Layout from '../Components/Layout/Layout';
import './About.css';
function About() {
  return (
    <Layout title={'About us - Kisan Mart'}>
      <section>
        <h1 className='about_heading'>About Us</h1>
        <div >
          <p className='about_para'>
            In our eCommerce application, we are committed to providing a seamless and enjoyable shopping experience for our customers. With a focus on user-friendly interfaces and cutting-edge technology, we strive to offer a wide range of products, from essentials to luxuries, curated to meet diverse tastes and preferences. Our team is dedicated to ensuring reliability, security, and efficiency in every transaction, empowering our customers to shop with confidence and convenience. Join us in exploring the world of online shopping, where quality meets convenience at every click.
          
          </p>
          <img src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png" alt="" className='about_img' />
        </div>
        <div>
          <p className='about_para'>
          What sets us apart is our exceptional Shopfy seller support assistance. <br /> We prioritise your needs and are committed to providing you with prompt assistance, <br /> whether you have questions, doubts, or require any kind of support for your business. <br /> Our dedicated team is here to help you every step of the way, ensuring that you have <br /> a smooth and successful selling experience on Shopfy. Feel free to reach out to us when <br /> ever you need assistance - we're always here to support you.
          </p>
          <img src='https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg' alt="" className='about_img2' />
        </div>
      </section>
    </Layout>
  );
}

export default About;
