import { useContext } from 'react';
import AuthContext from './AuthContext';

/**
 * React hook for authentication against an EBS service.
 * Allows the storage of a token to be accessed across componenents.
 * This is not meant to be a source of truth. Use only for presentational purposes.
 */
export default () => useContext(AuthContext);
