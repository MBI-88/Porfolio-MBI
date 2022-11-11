import { useEffect, useReducer } from "react";
import { Loader } from "../../../shared/Loading/Loading";
import { GetApi } from "../../services/Helpers";
import Body from "./components/Body/Body";


const apiUrl = process.env.REACT_APP_API_URL
const userName = process.env.REACT_APP_NAME

const test = [
    {
      "id": 395521270,
      "node_id": "MDEwOlJlcG9zaXRvcnkzOTU1MjEyNzA=",
      "name": "Desktop-App",
      "full_name": "MBI-88/Desktop-App",
      "private": false,
      "html_url": "https://github.com/MBI-88/Desktop-App",
      "description": "Digital-Signal-Process",
      "fork": false,
      "url": "https://api.github.com/repos/MBI-88/Procode",
      "forks_url": "https://api.github.com/repos/MBI-88/Desktop-App/forks",
      "keys_url": "https://api.github.com/repos/MBI-88/Desktop-App/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/MBI-88/Desktop-App/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/MBI-88/Desktop-App/teams",
      "hooks_url": "https://api.github.com/repos/MBI-88/Desktop-App/hooks",
      "issue_events_url": "https://api.github.com/repos/MBI-88/Desktop-App/issues/events{/number}",
      "events_url": "https://api.github.com/repos/MBI-88/Desktop-App/events",
      "assignees_url": "https://api.github.com/repos/MBI-88/Desktop-App/assignees{/user}",
      "branches_url": "https://api.github.com/repos/MBI-88/Desktop-App/branches{/branch}",
      "tags_url": "https://api.github.com/repos/MBI-88/Desktop-App/tags",
      "blobs_url": "https://api.github.com/repos/MBI-88/Desktop-App/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/MBI-88/Desktop-App/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/MBI-88/Desktop-App/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/MBI-88/Desktop-App/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/MBI-88/Desktop-App/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/MBI-88/Desktop-App/languages",
      "stargazers_url": "https://api.github.com/repos/MBI-88/Desktop-App/stargazers",
      "contributors_url": "https://api.github.com/repos/MBI-88/Desktop-App/contributors",
      "subscribers_url": "https://api.github.com/repos/MBI-88/Desktop-App/subscribers",
      "subscription_url": "https://api.github.com/repos/MBI-88/Desktop-App/subscription",
      "commits_url": "https://api.github.com/repos/MBI-88/Desktop-App/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/MBI-88/Desktop-App/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/MBI-88/Desktop-App/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/MBI-88/Desktop-App/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/MBI-88/Desktop-App/contents/{+path}",
      "compare_url": "https://api.github.com/repos/MBI-88/Desktop-App/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/MBI-88/Desktop-App/merges",
      "archive_url": "https://api.github.com/repos/MBI-88/Desktop-App/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/MBI-88/Desktop-App/downloads",
      "issues_url": "https://api.github.com/repos/MBI-88/Desktop-App/issues{/number}",
      "pulls_url": "https://api.github.com/repos/MBI-88/Desktop-App/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/MBI-88/Desktop-App/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/MBI-88/Desktop-App/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/MBI-88/Desktop-App/labels{/name}",
      "releases_url": "https://api.github.com/repos/MBI-88/Desktop-App/releases{/id}",
      "deployments_url": "https://api.github.com/repos/MBI-88/Desktop-App/deployments",
      "created_at": "2021-08-13T04:33:57Z",
      "updated_at": "2022-01-01T04:51:28Z",
      "pushed_at": "2022-01-01T04:51:26Z",
      "git_url": "git://github.com/MBI-88/Desktop-App.git",
      "ssh_url": "git@github.com:MBI-88/Desktop-App.git",
      "clone_url": "https://github.com/MBI-88/Desktop-App.git",
      "svn_url": "https://github.com/MBI-88/Desktop-App",
      "homepage": "",
      "size": 46,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "Python",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "has_discussions": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [
  
      ],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "main"
    },
  ]


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
        //GetApi(apiUrl + `/${userName}/repos`)
        //.then(response => response.json())
        //.then(result => {
          //  setState({type: 'FETCHING', payload: result})
       // })
        //.catch(() => {
          //  setState({ type: 'ERROR' })
        //})
        setState({
            type: 'FETCHING',
            payload: test
        })
    },[])

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