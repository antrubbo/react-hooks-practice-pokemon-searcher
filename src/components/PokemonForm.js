import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({name, hp, frontUrl, backUrl, setName, setHp, setFrontUrl, setBackUrl, handleOnSubmit}) {

  const sprites = {
    "front" : frontUrl,
    "back" : backUrl
  }
  
  const formData = {
    name, 
    hp,
    sprites 
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault()
          handleOnSubmit(formData)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input value={name} fluid label="Name" placeholder="Name" name="name" onChange={evt => setName(evt.target.value)}/>
          <Form.Input value={hp} fluid label="hp" placeholder="hp" name="hp" onChange={evt => setHp(evt.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={evt => setFrontUrl(evt.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={evt => setBackUrl(evt.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
