import './Body.css'
import { Link as RouterLink } from 'react-router-dom'

const optionalImage = './assets/image-porfolio.jpg'

const Body = ({ data, loading }) => (
    <article className={loading ? "display-hidden" : "container-fluid project-appear"}>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
            {
                data.map(item =>
                (
                    <div className="col">
                        <div className="card" >
                            <img src={optionalImage} className="card-img-top img-fluid w-50 h-50" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    Description: {item.description}
                                </p>
                                <RouterLink to={`/project-detail/${item}`} className="btn btn-primary">
                                    Project details
                                </RouterLink>
                            </div>
                        </div>
                    </div>

                )
                )
            }

        </div>

    </article>
)

export default Body