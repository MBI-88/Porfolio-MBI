import './Body.css'

const optionalImage = ''

const Body = ({data,loading}) => (
    <article className={loading ? "display-hidden" : "container-fluid project-appear"}>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
            {
                data.map(item =>
                (
                    <div className=" col">
                        <div className="card" style="width: 5rem;">
                            <img src={item} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">

                                </p>
                                <a href="#" class="btn btn-primary">Project details</a>
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