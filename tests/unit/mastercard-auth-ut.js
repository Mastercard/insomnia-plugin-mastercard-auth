import test from 'ava';
import { insomniaOAuth } from '../../src/mastercard-auth';

test( 'Does exist', t => {
  const ioa = new insomniaOAuth();

  t.is( typeof ( ioa ), 'object', 'module should be an object' );
  t.is( ioa !== null, true, 'module should exist' );
} );
