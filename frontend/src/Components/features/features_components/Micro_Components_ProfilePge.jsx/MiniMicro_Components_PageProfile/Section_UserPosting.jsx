import React from "react";
import { useSelector } from "react-redux";

function Section_UserPosting() {
  const components = useSelector((state) => state.ComponentImagePostReducer);

  return (
    <section className="UserPosting">
      <article className="UserPosting-NameProfile">
        <div className="NameProfileText">
          <figure className="ImageProfile-NameProfile">
            <img src={components.ImageDummy} alt="" />
          </figure>
          <div className="TextProfile-NameProfile">
            <p> NameDummy</p>
            <p>@nameDummy</p>
          </div>
        </div>
        <div className="ButtonList-NameProfile">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Fitur tambahan */}
        {/* <div className="ShowMoreFitur"></div> */}
      </article>
      <article className="UserPosting-ImagePosting">
        <figure className="Image-ImagePosting">
          <img src={components.ImageDummy2} alt="" />
        </figure>
      </article>
      <article className="UserPosting-ArticlePosting">
        <figcaption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            libero perferendis modi culpa aliquam reiciendis doloremque ad magni
            laborum exercitationem dolore esse asperiores deserunt saepe
            reprehenderit consequatur accusamus, rerum laudantium quo.
            Necessitatibus debitis, maxime minima facere aut nesciunt quisquam
            cupiditate.
          </p>
        </figcaption>
      </article>
      <article className="UserPosting-LikePosting">
        <div className="wrapLikePosting">
          <figure className="Love-LikePosting">
            <img src={components.ImageLove} alt="" />
            <figcaption>
              <p>12</p>
            </figcaption>
          </figure>
          <figure className="Chat-LikePosting">
            <img src={components.ImageChat} alt="" />
            <figcaption>
              <p>12</p>
            </figcaption>
          </figure>
          <figure className="Share-LikePosting">
            <img src={components.ImageShare} alt="" />
          </figure>
          <figure className="Bookmarks-LikePosting">
            <img src={components.ImageBookmarks} alt="" />
          </figure>
        </div>
      </article>
    </section>
  );
}

export default Section_UserPosting;
