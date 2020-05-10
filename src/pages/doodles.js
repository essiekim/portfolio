import React from 'react'
import Layout from '../components/Layout'

const Doodles = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Doodles</h2>
        </header>
        <section className="wrapper style5">
          <p>
            In order to see how far our creativity and skill could take us, we
            decided to try to create a game. Rather than to manually create each
            level, we used procedural generation to create the maps, and
            reconfigured an npm module to integrate the puzzle into our game.
            Due to this, our game is scalable and each playthrough of the game
            will be unique.
          </p>{' '}
          <p>
            In order to see how far our creativity and skill could take us, we
            decided to try to create a game. Rather than to manually create each
            level, we used procedural generation to create the maps, and
            reconfigured an npm module to integrate the puzzle into our game.
            Due to this, our game is scalable and each playthrough of the game
            will be unique.
          </p>{' '}
          <p>
            In order to see how far our creativity and skill could take us, we
            decided to try to create a game. Rather than to manually create each
            level, we used procedural generation to create the maps, and
            reconfigured an npm module to integrate the puzzle into our game.
            Due to this, our game is scalable and each playthrough of the game
            will be unique.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default Doodles
