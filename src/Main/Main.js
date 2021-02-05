import React, { Fragment, useState } from "react";
import Group25 from "../Image/Group25.svg";
import Bitmap2 from "../Image/Bitmap2.png";
import PlusStand from "./PlusStand";
import guy1 from "../Image/guy1.svg";

function Main() {
  const [border, setBorder] = useState("Overview");

  return (
    <Fragment>
      <div className="Main-containe-1">
        <ul>
          <li
            onClick={() => setBorder("Overview")}
            style={
              border === "Overview"
                ? {
                    borderRadius: "8px 8px 0px 0px",
                    borderTop: "1px solid ",
                    borderBottom: "0px solid",
                    borderRight: "1px solid ",
                    borderLeft: "1px solid",
                  }
                : {}
            }
          >
            Overview
          </li>

          <li
            onClick={() => setBorder("Specs")}
            style={
              border === "Specs"
                ? {
                    borderRadius: "8px 8px 0px 0px",
                    borderTop: "1px solid ",
                    borderBottom: "0px solid",
                    borderRight: "1px solid ",
                    borderLeft: "1px solid",
                  }
                : {}
            }
          >
            Specs
          </li>

          <li
            onClick={() => setBorder("Reviews")}
            style={
              border === "Reviews"
                ? {
                    borderRadius: "8px 8px 0px 0px",
                    borderTop: "1px solid ",
                    borderBottom: "0px solid",
                    borderRight: "1px solid ",
                    borderLeft: "1px solid",
                  }
                : {}
            }
          >
            Reviews
          </li>

          <li
            onClick={() => setBorder("Accessories")}
            style={
              border === "Accessories"
                ? {
                    borderRadius: "8px 8px 0px 0px",
                    borderTop: "1px solid ",
                    borderBottom: "0px solid",
                    borderRight: "1px solid ",
                    borderLeft: "1px solid",
                  }
                : {}
            }
          >
            Accessories
          </li>

          <li
            onClick={() => setBorder("Support")}
            style={
              border === "Support"
                ? {
                    borderRadius: "8px 8px 0px 0px",
                    borderTop: "1px solid ",
                    borderBottom: "0px solid",
                    borderRight: "1px solid ",
                    borderLeft: "1px solid",
                  }
                : {}
            }
          >
            Support
          </li>

          <li
            style={{
              flex: 1,
              borderBottom: "1px solid",
              marginTop: "23px",
            }}
          ></li>
        </ul>
      </div>
      <div className="Main-container-2">
        <img className="girlImg" src={Group25} alt="" />
        <p>
          <strong style={{ fontSize: "58px" }}>
            Perfect sound immersive world
          </strong>
          <br />
          QuietComfort 35 wireless headphones II are engineered with renowned
          noise cancellation. With the Google Assistant and Amazon Alexa
          built-in, you have instant access to millions of songs, playlists and
          more—hands free.
        </p>
      </div>
      <div className="Main-container-3">
        <p>
          <strong style={{ fontSize: "58px" }}>Premium design</strong>
          <br />
          When you want to take your music anywhere, you need headphones built
          to keep up. With impact-resistant materials, glass-filled nylon, and
          corrosion-resistant stainless steel, they’re engineered to survive
          life on the go.
        </p>
      </div>
      <div className="Main-container-4">
        <div className="container-4-box1">
          <img className="img1" src={Bitmap2} alt="bitmap2" />

          <PlusStand
            title="Impact resistant"
            disc="Designed to handle life on the go."
            topp={-497}
            leftt={400}
          />
          <PlusStand
            title="Impact resistant 2"
            disc="Designed to handle life on the go."
            topp={-267}
            leftt={440}
          />
          <PlusStand
            title="Impact resistant 3"
            disc="Designed to handle life on the go."
            topp={-336}
            leftt={-182}
            divleft={true}
          />
          <PlusStand
            title="Impact resistant 4"
            disc="Designed to handle life on the go."
            topp={-486}
            leftt={-233}
            divleft={true}
          />
          <PlusStand
            title="Impact resistant 5"
            disc="Designed to handle life on the go."
            topp={-833}
            leftt={-170}
            divleft={true}
          />
        </div>
      </div>
      <div className="Main-container-5">
        <p>
          <strong style={{ fontSize: "58px" }}>
            Up to 20 hours battery life
          </strong>
          <br />
          Enjoy up to 20 hours of listening, enough time to pore through this
          entire playlist. So you can keep the music — or the quiet — going all
          day long. And when it finally runs down, a quick 15-minute charge
          gives you another 2.5 hours.
        </p>
        <img className="guyImg" src={guy1} alt="" />
      </div>
    </Fragment>
  );
}

export default Main;
