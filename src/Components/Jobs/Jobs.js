import React, { Component } from "react";
import "./Jobs.css";

export class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      jobs: [],
    };
  }

  componentDidMount() {
    fetch("https://jobs-api.squareboat.info/api/v1/jobs", {
      headers: {
        key: "",
        value: "",
        type: "text",
        disabled: true,
      },
      query: {
        key: "page",
        value: "1",
        disabled: true,
      },
    }).then((resp) => {
      resp.json().then((result) => {
        this.setState({ content: result.data });
        console.log(this.state.content);
      });
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th  className="table-dark">Job Title</th>
              <th  className="table-dark">Location</th>
              <th  className="table-dark">Job Description</th>
            </tr>

            {this.state.content.map((item, i) => (
              <tr key={i}>
                <td className="text-white bg-warning bg-gradient">{item.title}</td>
                <td>{item.location}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Jobs;
