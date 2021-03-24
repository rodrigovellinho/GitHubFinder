import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../Repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propsTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
  }

  render() {
    const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;

    const { loading, repos } = this.props;

    if(loading) return <Spinner />

    return ( 
      <Fragment>
        <Link to="/" className="btn btn-light"> Back to search</Link>
        Hireable: {''}
        {hireable ? <i className="fas fa-check text-success" /> 
        : <i className="fas fa-times-circle text-danget" /> }
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
              </Fragment>}
            <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
            <ul>

              <li>
                {login && <Fragment>
                  <strong>Username: </strong> {login}
                  </Fragment>}
              </li>

              <li>
                {company && <Fragment>
                  <strong>Company: </strong> {login}
                  </Fragment>}
              </li>

              <li>
                {blog && <Fragment>
                  <strong>Website: </strong> {login}
                  </Fragment>}
              </li>

            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div class="badge badge-primary"> Followers: {followers}</div>
          <div class="badge badge-success"> Following: {following}</div>
          <div class="badge badge-light"> Public Repos: {public_repos}</div>
          <div class="badge badge-primary"> Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User
