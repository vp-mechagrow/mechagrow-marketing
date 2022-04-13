import React from 'react'
import { navigate } from "gatsby-link";




class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {

    return (
              <div className="content">
                <h2>Zapojte se s námi do konopné revoluce!</h2>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="columns">
                  <div className="field column is-4">
                    <label className="label" htmlFor={"name"}>
                      Jméno
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column is-4">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                    </div>
                    <div className="field column is-4">
                    <label className="label" htmlFor={"message"}>
                      Message
                    </label>
                    <div className="select">
                      <select
                        className="input"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}>
                      <option hidden disabled value>Vyberte možnost</option>
                      <option>Jsem Lékárník nebo Dodavatel</option>
                      <option>Mám zájem o spolupráci</option>
                      <option>Mám zájem o váš produkt</option>
                      </select>
                    </div>
                  </div>
                  </div>

                  <div className="field">
                    <button className="button is-link" type="submit">
                      Chci se zapojit!
                    </button>
                  </div>
                </form>
              </div>
    )
  }
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default ContactForm
