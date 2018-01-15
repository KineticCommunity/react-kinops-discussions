# React Kinops Common

Helpful components for developing Kinetic Kinops bundles with React.

## Quick Start

### Step 1: Add the library

```
yarn add react-kinops-discussion react-kinops-common
```

### Step 1b. Setup react-kinops-common.

See the [react-kinops-common](github.com/KineticCommunity/react-kinops-common) repo for more information.

### Step 2. Add the reducers to your existing Redux.

Then you will want to include the shared reducers into your store:

```
import { reducers as discussionReducers } from 'react-kinops-discussions';

// Change this in your store creation:
combineReducers({ ...reducers })

// To this:
combineReducers({ ...reducers, ...discussionReducers })
```

### Step 3. Add the sagas to your existing sagas.

Then you need to merge your sagas with the shared sagas:

```
import { saga as discussionsSagas, combineSagas } from 'react-kinops-discussions';

// From this:
sagaMiddleware.run(sagas));
// To this:
sagaMiddleware.run(combineSagas([sagas, discussionsSagas]));
```

### Step 4. Include the shared CSS

```
import 'react-kinops-discussions/styles/master.scss';
```

### Step 5. Add the components

```
import { Discussion } from 'react-kinops-discussions';

// Example.
export const Layout = ({ discussionId }) =>
  <div>
    <Discussion isMobileModal discussionId={discussionId} />
  </div>;
```

The `Discussion` component takes four possible props:

* discussionId - the GUID for the Kinops Discussion
* isModal - if the discussion should always be rendered in a modal.
* isMobileModal - if the discussion should be rendered in a modal when in mobile mode.
* renderClose - a render prop defining the React component and behavior for the close button on the top left.

When using either modal mode you must dispatch an action to open the discussion modal:

```
import { actions } from 'react-kinops-discussions';

dispatch(actions.openModal(discussionId, 'discussion'));
```
