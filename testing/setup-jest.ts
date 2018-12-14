import 'jest-preset-angular';
import './jestGlobalMocks';

/** Ucina stacktrace błędu w testach po drugiej linii */
Error.stackTraceLimit = 2;
