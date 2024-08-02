## - Virtual DOM is there even now but react uses fibre(algo) to update the DOM

#### - - react uses reconciliation algo to differ on tree with another to determine which parts need to change.

#### - - Reconciliation is the algo behind what's popularly understood as the virtual DOM.

#### - - Diff of lists is performed using keys. Keys should be "stable, unique and predictable".

-

## - Fiber react architecture:

#### - - pause work and come back to it later.

#### - - assign priority to different types of work.

#### - - reuse previously completed work.

#### - - abort work if it's no longer needed

#### - - read for further details: https://github.com/acdlite/react-fiber-architecture
