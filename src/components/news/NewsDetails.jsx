import parse from 'html-react-parser';


const NewsDetails = (props) => {


    return (
        <div>
            <div className="container">
                <h4 className="my-3">{props.details['title']}</h4>
                <hr className="" />
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <img className="w-100" src={props.details['img1']} />
                        <h4>{props.details.categories['name']}</h4>
                        <small>
                            {props.details['updatedAt']}
                        </small>
                        <h2 className='mt-3 '>{props.details['title']}</h2>
                        <p className='mt-3 '>
                        {parse(props.details['short_des'])}
                        </p>
                        <p className='mt-3 '>
                        {parse(props.details['long_des'])}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;