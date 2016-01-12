'use strict';

import alt from 'components/Dispatcher';
import { TimelogsStore } from 'stores//TimelogsStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('TimelogsStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, TimelogsStore);
  });
});
