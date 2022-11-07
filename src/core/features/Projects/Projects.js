import { useEffect, useReducer } from "react";
import { Loader } from "../../../shared/Loading/Loading";
import { GetApi } from "../../services/Helpers";
import Body from "./components/Body/Body";


const apiUrl = process.env.REACT_APP_API_URL
const name = process.env.REACT_APP_NAME

const custumeState = (states, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...states, loading: true, error: false
            }
        case 'FECHING':
            return {
                ...states, loading: false, error: false, data: payload
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
        const getData = GetApi(apiUrl + `/${name}/repos`)
        getData.then(response => {
            setState({ type: 'FECHING', payload: response.json() })
        }).catch(() => {
            setState({ type: 'ERROR' })
        })
    }, [])

    return (
        <section>
            {
                state.loading ?
                    <div className="container-fluid text-center pt-5">
                        <Loader />
                    </div> : state.Error ? <div className="container text-center pt-5 bg-danger">
                        <h3 className=" h3 fw-bold pt-3">Connection error</h3>
                    </div> :
                        (
                            <Body data={state.payload} loading={state.loading} />
                        )
            }
        </section>

    );
};

export default Projects;