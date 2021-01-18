import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const { name, hp, sprites } = pokemon

  const [isClicked, setIsClicked] = useState(false)

  return (
    <Card>
      <div onClick={() => setIsClicked(!isClicked)}>
        <div className="image">
          <img src={isClicked ? sprites.back : sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
