import { useEffect, useReducer } from "react";
import { Loader } from "../../../shared/Loading/Loading";
import { GetApi } from "../../services/Helpers";
import Body from "./components/Body/Body";


const apiUrl = process.env.REACT_APP_API_URL
const userName = process.env.REACT_APP_NAME

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

const Projects = () => {
    const [state, setState] = useReducer(custumeState, {
        data: [], loading: true, error: false
    })

    useEffect(() => {
        setState({ type: 'LOADING' })
        GetApi(apiUrl + `/${userName}/repos`)
        .then(response => response.json())
        .then(result => {
            setState({type: 'FETCHING', payload: result})
        })
        .catch(() => {
            setState({ type: 'ERROR' })
        })
    },)

    return (
        <section className="container-fluid">
            {
                state.loading ?
                    <div className="text-center pt-5">
                        <Loader />
                    </div> : state.Error ? <div className="container text-center pt-5 bg-danger">
                        <h3 className=" h3 fw-bold pt-3">Connection error</h3>
                    </div> :
                        (
                           <Body data={state.data} loading={state.loading} />
                          
                        )
            }
        </section>

    );
};

export default Projects;