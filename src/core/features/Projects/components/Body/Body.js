import './Body.css'
import { Link as RouterLink } from 'react-router-dom'

const optionalImage = './assets/image-porfolio.jpg'

const Body = ({ data, loading }) => (
    <article className={loading ? "display-hidden" : "container-fluid project-appear"}>
        <div className="row row-cols-lg-4 row-cols-1 ps-lg-5 mt-lg-3 mt-5 mb-2 pe-lg-5">
            {
                data.map(item =>
                (
                    <div className="col col-md-0 col-sm-0 pb-5" key={item.id}>
                        <div className="card w-75" >
                            <img src={optionalImage} className="card-img-top img-fluid" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <RouterLink to={`/project-details/`} state={item} className="btn btn-primary">
                                    Details
                                </RouterLink>
                            </div>
                        </div>
                    </div>

                )
                )
            }

        </div>
        <div className='space'>

        </div>

    </article>
)

export default Body