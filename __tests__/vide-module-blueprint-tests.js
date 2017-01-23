import {EoModule,Request} from '../vide-module-blueprint';

jest.dontMock('../vide-module-blueprint');

describe('Vide module blueprint', function() {
    
    it('works correctly', function() {
        var module = new EoModule();
        var request = new Request();
        
        expect(module.isActive()).toBe(true);
        expect(module.deactivate().isActive()).toBe(false);
        expect(module.deactivate().activate().isActive()).toBe(true);
        expect(module.deactivate().checkRequest(request)).toBe(false);
    });
    
});