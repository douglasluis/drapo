declare class DrapoApplication {
    private _isLoaded;
    private _logger;
    private _router;
    private _server;
    private _observer;
    private _document;
    private _controlFlow;
    private _parser;
    private _storage;
    private _solver;
    private _binder;
    private _config;
    private _register;
    private _serializer;
    private _barber;
    private _modelHandler;
    private _attributeHandler;
    private _classHandler;
    private _eventHandler;
    private _functionHandler;
    private _componentHandler;
    private _cookieHandler;
    private _sectorContainerHandler;
    private _windowHandler;
    private _behaviorHandler;
    private _plumber;
    private _formatter;
    private _validator;
    private _exceptionHandler;
    private _globalization;
    private _stylist;
    private _viewportHandler;
    private _debugger;
    get IsLoaded(): boolean;
    get Log(): DrapoLogger;
    get Router(): DrapoRouter;
    get Server(): DrapoServer;
    get Observer(): DrapoObserver;
    get Document(): DrapoDocument;
    get ControlFlow(): DrapoControlFlow;
    get Parser(): DrapoParser;
    get Storage(): DrapoStorage;
    get Solver(): DrapoSolver;
    get Binder(): DrapoBinder;
    get Config(): DrapoConfig;
    get Register(): DrapoRegister;
    get Serializer(): DrapoSerializer;
    get Barber(): DrapoBarber;
    get ModelHandler(): DrapoModelHandler;
    get AttributeHandler(): DrapoAttributeHandler;
    get ClassHandler(): DrapoClassHandler;
    get EventHandler(): DrapoEventHandler;
    get FunctionHandler(): DrapoFunctionHandler;
    get ComponentHandler(): DrapoComponentHandler;
    get CookieHandler(): DrapoCookieHandler;
    get SectorContainerHandler(): DrapoSectorContainerHandler;
    get WindowHandler(): DrapoWindowHandler;
    get BehaviorHandler(): DrapoBehaviorHandler;
    get Plumber(): DrapoPlumber;
    get Formatter(): DrapoFormatter;
    get Validator(): DrapoValidator;
    get ExceptionHandler(): DrapoExceptionHandler;
    get Globalization(): DrapoGlobalization;
    get Stylist(): DrapoStylist;
    get ViewportHandler(): DrapoViewportHandler;
    get Debugger(): DrapoDebugger;
    constructor();
    OnLoad(): Promise<void>;
    show(): string;
    close(): string;
}
