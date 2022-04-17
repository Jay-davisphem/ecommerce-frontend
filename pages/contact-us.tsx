import Input from '../components/Input';   
import Title from '../components/Title';

function Contact(){
  return (
      <div className='container align-middle mx-auto max-w-xs'>
        <Title title='Contact Us' />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">  
          <Input id='Full Name' placeholder='Full Name' />
          <Input id='email' type='email' placeholder='Email' />
          <Input id='message' placeholder='What can we do for you?' large={true} />
          <button
            className="bg-sec hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Send Us a Message
          </button>
        </form>
      </div>
      )

}

export default Contact;
