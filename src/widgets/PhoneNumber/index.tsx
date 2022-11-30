import CountryCode from './CountryCode';
import Mobile from './Mobile';

const PhoneNumber = () => (
    <div className="phoneNumber">
        <div className="countryCode">
            <CountryCode />
        </div>
        <div className="mobile">
            <Mobile />
        </div>
    </div>
);

export default PhoneNumber;
