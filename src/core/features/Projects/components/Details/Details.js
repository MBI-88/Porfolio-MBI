import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../../../../../shared/Loading/Loading";
import './Details.css'
import { GetApi } from "../../../../services/Helpers";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';



const custumeState = (states, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...states, loading: true, error: false
            }
        case 'FETCHING':
            return {
                ...states, loading: false, error: false, data: action.payload
            }
        case 'ERROR':
            return {
                ...states, loading: false, error: true
            }

        default: throw new Error()
    }

}
const optionalImage = '../assets/image-porfolio.jpg'
const apiUrl = process.env.REACT_APP_API_REPO
const userName = process.env.REACT_APP_NAME
const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 159, 80, 0.2)',
    'rgba(255, 159, 100, 0.2)',
    'rgba(255, 100, 64, 0.2)',
    'rgba(255, 159, 50, 0.5)',
]

const data = {
    labels: [],
    datasets: [
        {
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        }
    ]
}

const test = {
    Python: 109654,
    HTML: 76360,
    JavaScript: 8012,
    CSS: 4754,
    Shell: 1331,
    Procfile: 39
}

const Details = () => {
    const [state, setState] = useReducer(custumeState, {
        data: {}, loading: true, error: false
    })
    const [chart, setChart] = useState(data)
    const handlerChart = () => {
        if (state.data !== null) {
            const colorCount = Object.keys(state.data).length
            setChart(
                {
                    labels: Object.keys(state.data),
                    datasets: [
                        {
                            label: 'Values',
                            data: Object.values(state.data),
                            backgroundColor: colors.slice(0, colorCount),
                            borderColor: colors.slice(0, colorCount),
                            borderWidth: 1,

                        }
                    ]
                }
            )
        }
    }
    const repo = useLocation()
    ChartJS.register(ArcElement, Tooltip, Legend);

    useEffect(() => {
        setState({ type: 'LOADING' })
        //GetApi(apiUrl + `${userName}/${repo.name}/languages`)
        //  .then(response => response.json())
        // .then(result => {
        //   setState({ type: 'FETCHING', payload: result })
        // handlerChart()
        // })
        //.catch(() => {
        //  setState({ type: 'ERROR' })
        //})
        setState({
            type: 'FETCHING',
            payload: test
        })
        handlerChart()
    }, [])

    console.log(repo.state.private)
    return (
        <section className="container-fluid">
            {
                state.loading ?
                    <div className="text-center pt-5">
                        <Loader />
                    </div> : state.Error ? <div className="container text-center pt-5 bg-danger">
                        <h3 className="h3 fw-bold pt-3">Connection error</h3>
                    </div> :
                        (
                            <article className={state.loading ? "display-hidden" : "container-fluid project-appear"}>
                                <section className=" d-lg-flex d-md-block d-sm-block g-5 ps-lg-5 mt-lg-3 p-0  mt-5 mb-2 pe-lg-5">
                                    <div className="card">
                                        <img src={optionalImage} className="card-img-top img-fluid" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{repo.state.name}</h5>
                                            <p className="card-text">
                                                Private: {repo.state.private ? <strong>Yes</strong>: <strong>No</strong>} <br />
                                                Description: {repo.state.description} <br />
                                                Created at: {repo.state.created_at} <br />
                                                Updated at: {repo.state.updated_at} <br />
                                                Clone url: <a href={repo.state.clone_url}><strong>{repo.state.name}</strong></a><br/>
                                                Size: {repo.state.size} Kb <br />
                                                Languages: {repo.state.language} <br/>
                                                Visibility: {repo.state.visibility} <br />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="container text-center ">
                                        <Pie data={chart} />
                                    </div>
                                </section>
                                <div className="space">

                                </div>
                            </article>
                        )
            }
        </section>
    );
};


export default Details;