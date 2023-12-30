import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="block">
    <div className="container">
        <div className="card mb-0">
            <div className="card-body contact-us ">
                <div className="contact-us__container ">
                    <div className="row">
                        <div className="col-12 col-lg-6 pb-4 pb-lg-0 p-10 border-y-stone-950 ">
                            <h4 className="contact-us__header card-title font-bold p-9 text-4xl ">Liên hệ hỗ trợ :</h4>
                            <p>
                                    <img
                    className="h-40 w-auto rounded-full flex justify-center items-center "
                    src="https://i.imgur.com/sQsNdIz.jpg"
                  
                  />
                                    </p>
                            <div className="contact-us__address border-spacing-2 ">
                        
                                <p className='flex items-center border-spacing-2 '>
                                    <a  className='font-bold flex items-center' href="https://t.me/numberluli" target="_blank">
                      
                                    <i  className="fa fa-paper-plane font-bold"></i> Chat với hỗ trợ viên Tele
                                    <img
                    className="h-8 w-auto rounded-full"
                    src="https://i.imgur.com/3XIPt0O.jpg"
                  
                  />
                                    </a></p>

                                   


                                    <p className='font-bold  flex items-center'>
  <i className="footer-contacts__icon far fa-clock font-bold"></i>
  <span className="">Mon-Sat 08:00am - 10:00pm</span>
  <img
    className="h-8 w-auto rounded-full ml-2"
    src="https://i.imgur.com/Es2yXxL.png"
    alt="Company Logo"
  />
</p>

                               
                                <p className='font-bold '>
                                    Nhân viên hỗ trợ của chúng tôi sẽ cố gắng xử lý khiếu nại và giải quyết thắc mắc của các bạn nhanh nhất có thể.
                                </p>
                                
                            </div>
                        </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Support;
